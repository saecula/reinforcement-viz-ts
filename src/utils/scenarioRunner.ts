import { EnvironmentType, AgentType } from '../contexts';

import { Enumerated } from './environments';

const scenarioRunner = (env: EnvironmentType, agents: AgentType[]) => {
  // return function to run one episode for each environment
  return () => {
    const ids = agents.map((agent) => agent.id);
    const paths = {} as Enumerated<number[][]>;
    const rewards = {} as Enumerated<number[]>;
    const generateData = (agent: AgentType) => {};
    return agents.map((agent) => generateData(agent));
  };
};

export default scenarioRunner;
