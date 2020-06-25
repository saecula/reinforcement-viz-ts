import { useState, useEffect } from 'react';
import { envs, defaultEpisodes, envKeysEnum } from '../constants';
import { getLocal, setLocal } from 'utils';

export interface EnvironmentType {
  key: envKeysEnum;
  displayName: string;
  states: (any[] | undefined)[];
}

const useEnvironment = (): {
  environment: EnvironmentType;
  episodes: number;
  setEnvironment: (name: string) => void;
  setEpisodes: (episodes: string) => void;
} => {
  const localEnv = getLocal<EnvironmentType>('env');
  const [environment, setEnv] = useState(
    localEnv !== null ? localEnv : envs[0]
  );
  const localEpisodes = getLocal<number>('episodes');
  const [episodes, setEps] = useState(
    localEpisodes !== null ? localEpisodes : defaultEpisodes
  );

  const setEnvironment = (name: string) => {
    const newEnv = envs.find((e) => e.key === name);
    if (newEnv !== undefined) setEnv(newEnv);
  };
  const setEpisodes = (episodes: string) => {
    const parsed = parseInt(episodes);
    if (parsed >= 1 && !isNaN(parsed)) setEps(parsed);
  };

  useEffect(() => setLocal<EnvironmentType>('env', environment), [environment]);
  useEffect(() => setLocal<number>('episodes', episodes), [episodes]);

  return {
    environment,
    episodes,
    setEnvironment,
    setEpisodes,
  };
};

export default useEnvironment;
