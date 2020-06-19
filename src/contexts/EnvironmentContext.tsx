import React, { createContext } from 'react';
import useEnvironments, { EnvironmentType } from './EnvironmentState';

const EnvironmentContext = createContext<{
  environment: EnvironmentType;
  episodes: number;
  setEnvironment: (name: string) => void;
  setEpisodes: (episodes: string) => void;
}>({
  environment: {} as EnvironmentType,
  episodes: 1,
  setEnvironment: () => {},
  setEpisodes: () => {},
});

export const EnvironmentProvider: React.FunctionComponent<{}> = ({
  children,
}) => {
  const {
    environment,
    episodes,
    setEnvironment,
    setEpisodes,
  } = useEnvironments();

  return (
    <EnvironmentContext.Provider
      value={{ environment, episodes, setEnvironment, setEpisodes }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentContext;
