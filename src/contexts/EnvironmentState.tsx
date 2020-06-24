import { useState, useEffect } from 'react';
import { envs } from '../constants';
import { getLocal, setLocal } from 'utils';

export interface EnvironmentType {
  key: string;
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
  const [episodes, setEps] = useState(40);
  const setEnvironment = (name: string) => {
    const newEnv = envs.find((e) => e.key === name);
    if (newEnv !== undefined) setEnv(newEnv);
  };
  const setEpisodes = (episodes: string) => {
    const parsed = parseInt(episodes);
    if (parsed >= 1) setEps(parsed);
  };

  useEffect(() => setLocal<EnvironmentType>('env', environment), [environment]);

  return {
    environment,
    episodes,
    setEnvironment,
    setEpisodes,
  };
};

export default useEnvironment;
