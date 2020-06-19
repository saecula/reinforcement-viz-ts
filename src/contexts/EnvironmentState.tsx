import { useState } from 'react';
import { envs } from '../constants';

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
  const [environment, setEnv] = useState(envs[0]);
  const [episodes, setEps] = useState(40);
  const setEnvironment = (name: string) => {
    const newEnv = envs.find((e) => e.key === name);
    if (newEnv !== undefined) setEnv(newEnv);
  };
  const setEpisodes = (episodes: string) => {
    const parsed = parseInt(episodes);
    if (parsed >= 1) setEps(parsed);
  };
  return {
    environment,
    episodes,
    setEnvironment,
    setEpisodes,
  };
};

export default useEnvironment;
