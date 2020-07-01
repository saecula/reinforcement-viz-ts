import { useState } from 'react';
import { EnvironmentType } from './EnvironmentState';
import { AgentType } from './AgentState';
import { episodeBatchFactory, EpisodeResult } from '../utils';
import { Map, defaultBatchSize } from '../constants';

interface ReactAgentData {
  pathMap: Map<number>;
  rewards: number[];
}

interface ReactData {
  [uuid: string]: ReactAgentData;
}

const initializeData = (agents: AgentType[]): ReactData =>
  agents.reduce((obj, agent) => {
    obj[agent.id] = { pathMap: {}, rewards: [] };
    return obj;
  }, {} as ReactData);

const toKeyString = (coords: number[]) => `${coords[0]},${coords[1]}`;

const addToMap = (map: Map<number>, coordinatesList: number[][]) => {
  const newMap = Object.assign({}, map);
  coordinatesList.forEach((coord) => {
    const key = toKeyString(coord);
    if (newMap[key] === undefined) {
      newMap[key] = 1;
    } else {
      newMap[key] += 1;
    }
  });
  return newMap;
};

const useScenario = (
  env: EnvironmentType,
  agents: AgentType[],
  episodes: number
) => {
  const initialDataObj = initializeData(agents);
  const [reactData, setData] = useState(initialDataObj);
  const setReactData = (epResult: EpisodeResult) =>
    setData((prevData) => {
      const newData: ReactData = {};
      for (const key in prevData) {
        const prevAgentInfo = prevData[key];
        const newAgentInfo = epResult[key];
        const { pathData } = newAgentInfo;
        const { pathMap } = prevAgentInfo;

        newData[key] = {
          pathMap: addToMap(pathMap, pathData),
          rewards: prevAgentInfo.rewards.concat(newAgentInfo.rewards),
        };
      }
      return newData;
    });

  const runScenario = () => {
    let episodesCount = episodes;
    let timer: number;

    const runTimedBatch = (count: number) => {
      if (episodesCount <= 0) {
        clearInterval(timer);
        return;
      }
      const runEpisodeBatch = episodeBatchFactory(env, agents);
      let batch =
        episodesCount < defaultBatchSize ? episodesCount : defaultBatchSize;
      const results = runEpisodeBatch(batch);
      setReactData(results);
      episodesCount -= batch;
    };

    timer = setInterval(runTimedBatch(episodesCount), 3000);
  };

  return {
    reactData,
    runScenario,
  };
};

export default useScenario;
