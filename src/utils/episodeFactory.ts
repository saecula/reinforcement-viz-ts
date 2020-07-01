import { EnvironmentType, AgentType } from '../contexts';
import { runtimeAgents, RuntimeAgent } from './agents';
import {
  runtimeEnvironments,
  AgentResult,
  EpisodeResult,
} from './environments';
import { ParamKeys } from '../constants';

export interface RuntimeAgentMap {
  [uuid: string]: RuntimeAgent;
}

export const initResults = (agents: AgentType[]): EpisodeResult => {
  const data: EpisodeResult = {};
  agents.forEach((agent) => (data[agent.id] = { pathData: [], rewards: [] }));
  return data;
};

const createInstancesMap = (
  a: AgentType[],
  env: EnvironmentType
): RuntimeAgentMap =>
  a.reduce((map, agent) => {
    const { id, key, params } = agent;
    const paramsMap = {} as ParamKeys;
    params.forEach((p) => (paramsMap[p.name] = p.value));
    map[id] = runtimeAgents[key](env.states, paramsMap);

    return map;
  }, {} as RuntimeAgentMap);

const concatResults = (total: AgentResult, next: AgentResult): AgentResult => {
  total.pathData = total.pathData.concat(next.pathData);
  total.rewards = total.rewards.concat(next.rewards);
  return total;
};

const episodeBatchFactory = (env: EnvironmentType, agents: AgentType[]) => {
  const agentInstancesMap = createInstancesMap(agents, env);
  const { key, states } = env;
  const EnvInstance = runtimeEnvironments[key](states);

  return function (batchSize: number): EpisodeResult {
    const batchResults = initResults(agents);

    for (let i = 0; i < batchSize; ++i) {
      const episodeResults = EnvInstance.runEpisodeForEachAgent(
        agentInstancesMap
      );
      for (const key in batchResults) {
        batchResults[key] = concatResults(
          batchResults[key],
          episodeResults[key]
        );
      }
    }

    return batchResults;
  };
};

export default episodeBatchFactory;
