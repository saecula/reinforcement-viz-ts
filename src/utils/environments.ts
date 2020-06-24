export interface Enumerated<T> {
  0: T;
  1?: T;
  2?: T;
  3?: T;
}

/*
* * * 
grid: the matrix of possible states, signified by color ('white', 'green', 'black')
rewards: the matrix of rewards acquired by landing on each state
currentLocation: last recorded location of agent
actionMap: a map of coordinates to available actions based on block colors and grid edges
* * * 
receiveSteps: receive actions from each agent, update locations, 
  and dole out reward, set of available actions, and whether episode is finished
*/

interface Environment {
  grid: string[][];
  rewards: number[][];
  currentLocation: Enumerated<number[]>;
  path: Enumerated<number[][]>;
  size: number[];
  actions: { left: string; right: string; down: string; up: string };
  actionMap: {};
  generateRewards(): number[][];
  generateActionMap(): {};
  getActionsForState(coords: number[]): string[];
  receiveSteps(
    actions: Enumerated<string>
  ): {
    reward: number;
    state: number[];
    actions: string[];
    done: boolean;
  };
  reset(): void;
}

class Environment {
  constructor(grid: string[][]) {
    this.grid = grid;
    this.rewards = this.generateRewards();
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
  receiveSteps(actions: Enumerated<string>) {
    return {};
  }
  reset() {}
}

//   agentIds: Enumerated<string>;
//   constructor(grid: string[][]) {

export default Environment;
