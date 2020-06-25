import { EnvironmentType, AgentType } from '../contexts';
import { runtimeAgents, RuntimeAgent } from './agents';
import { runtimeEnvironments } from './environments';
import { ParamKeys } from '../constants';

export interface RuntimeAgentMap {
  [uuid: string]: RuntimeAgent;
}

export interface RuntimeAgentResults {
  [uuid: string]: {
    path: number[][];
    reward: number;
  };
}

const scenarioRunner = (env: EnvironmentType, agents: AgentType[]) => {
  const createInstanceMap = (a: AgentType[]): RuntimeAgentMap =>
    a.reduce((map, agent) => {
      const { id, key, params } = agent;
      const paramsMap = {} as ParamKeys;
      params.forEach((p) => (paramsMap[p.name] = p.value));
      map[id] = runtimeAgents[key](env.states, paramsMap);

      return map;
    }, {} as RuntimeAgentMap);

  const agentInstancesMap = createInstanceMap(agents);
  const { key, states } = env;
  const EnvInstance = runtimeEnvironments[key](states);

  return function runEpisode(): RuntimeAgentResults {
    return EnvInstance.runEpisodeForEachAgent(agentInstancesMap);
  };
};

export default scenarioRunner;
