import { EnvironmentKeys } from '../constants';
import { RuntimeAgentMap, RuntimeAgentResults } from './scenarioRunner';

export interface Map<T> {
  [x: string]: T;
}

/*
* * * 
grid: the matrix of possible states, differentiated by color ('white', 'green', 'red', 'black')
rewards: the matrix of rewards acquired by landing on each state
currentLocation: last recorded location of agent
actionMap: a map of coordinates to available actions based on block colors and grid edges
* * * 
receiveSteps: receive actions from each agent, update locations, 
  and dole out reward, set of available actions, and whether episode is finished
*/

export interface RuntimeEnvironment {
  grid: string[][];
  rewards: number[][];
  currentLocation: number[];
  path: number[][];
  size: number[];
  actions: { left: string; right: string; down: string; up: string };
  actionMap: Map<string[]>;
  generateRewards(): number[][];
  generateActionMap(): Map<string[]>;
  getActionsForState(coords: number[]): string[];
  informAgent(
    action: string | null
  ): {
    reward: number;
    state: number[];
    actions: string[];
    done: boolean;
  };
  runEpisodeForEachAgent(agents: RuntimeAgentMap): RuntimeAgentResults;
  reset(): void;
}

export class RuntimeEnvironment {
  constructor(grid: string[][]) {
    this.grid = grid;
    this.rewards = this.generateRewards();
    this.currentLocation = [0, 0];
    this.path = [];
    this.size = [grid.length - 1, grid[0].length - 1];
    //todo: fill in
  }
  generateRewards() {
    return [[]];
  }
  generateActionMap() {
    return {};
  }
  getActionsForState(coords: number[]) {
    return [];
  }
  informAgent(action: string | null) {
    if (action === null) {
      const availableActions = this.getActionsForState(this.currentLocation);
      return {
        reward: 0,
        state: this.currentLocation,
        actions: availableActions,
        done: false,
      };
    }

    let [y, x] = this.currentLocation;
    if (action === 'up') {
      y = y - 1;
    } else if (action === 'down') {
      y = y + 1;
    } else if (action === 'right') {
      x = x + 1;
    } else if (action === 'left') {
      x = x - 1;
    } else {
      throw new Error(`Unknown step action: ${action}`);
    }

    this.currentLocation = [y, x];
    this.path.push(this.currentLocation);
    const reward = this.rewards[y][x];
    const availableActions = this.getActionsForState(this.currentLocation);
    const done = this.grid[y][x] === 'green';

    return {
      reward,
      state: this.currentLocation,
      actions: availableActions,
      done,
    };
  }

  runEpisodeForEachAgent(agents: RuntimeAgentMap) {
    const result = {} as RuntimeAgentResults;
    for (const key in agents) {
      const agent = agents[key];
      let isDone = false;
      let action = null;

      while (!isDone) {
        const { reward, state, actions, done } = this.informAgent(action);
        action = agent.handleAndStep(reward, state, actions);
        isDone = done;
      }

      const reward = agent.calculateEpisodeResult();
      result[key] = { path: this.path, reward };
      this.reset();
    }
    return result;
  }
  reset() {
    this.currentLocation = [0, 0];
    this.path = [];
  }
}

class RuntimeCliffEnvironment extends RuntimeEnvironment {
  constructor(grid: string[][]) {
    super(grid);
  }
}

class RuntimeWindEnvironment extends RuntimeEnvironment {
  constructor(grid: string[][]) {
    super(grid);
  }
}

class RuntimeTunnelEnvironment extends RuntimeEnvironment {
  constructor(grid: string[][]) {
    super(grid);
  }
}

class RuntimeCasinoEnvironment extends RuntimeEnvironment {
  constructor(grid: string[][]) {
    super(grid);
  }
}

const CLIFF = RuntimeCliffEnvironment;
const WIND = RuntimeWindEnvironment;
const TUNNEL = RuntimeTunnelEnvironment;
const CASINO = RuntimeCasinoEnvironment;

export const runtimeEnvironments: EnvironmentKeys<Function> = {
  CLIFF,
  WIND,
  TUNNEL,
  CASINO,
};
