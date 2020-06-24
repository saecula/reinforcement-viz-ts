/*
* * * 
epsilon: 
gamma: the discount factor placed on expected reward as it recedes into the future
alpha: the credence given to the action value functions of future steps
currentLocation: last recorded location of agent
actionMap: a map of coordinates to available actions based on block colors and grid edges
* * * 
receiveSteps: receive actions from each agent, update locations, 
  and dole out reward, set of available actions, and whether episode is finished
*/

export interface Agent {
  epsilon?: number;
  gamma?: number;
  alpha?: number;

  actionValues: {};
  returnsMap: {};
  rewardsList: {
    state: number[];
    action: string;
    reward: number;
  }[];

  initializeMap(typeOfMap: string, states: string[][]): {};
  toKeyString(state: string[], action: string): string;
  handleAndStep(reward: number, state: number[], actions: string[]): string;
  calculateResult(): number;
}
