import { Map } from './environments';
import { AgentKeys } from '../constants';
/*
states: length and width of environment states for generating action value function and rewards maps
* * * 
epsilon: action choice randomizing factor
gamma: the discount factor placed on expected reward as it recedes into the future
alpha: the credence given to the action value functions of future steps
currentLocation: last recorded location of agent
actionMap: a map of coordinates to available actions based on block colors and grid edges
* * * 
receiveSteps: receive actions from each agent, update locations, 
  and dole out reward, set of available actions, and whether episode is finished
*/

export interface RuntimeAgent {
  epsilon?: number;
  gamma?: number;
  alpha?: number;

  actionValues?: Map<number>;
  returnsMap?: Map<number[]>;
  rewardsList?: {
    state: number[];
    action: string;
    reward: number;
  }[];

  initializeMap<T>(typeOfMap: string, states: number[]): Map<T>;
  toKeyString(state: string[], action: string): string;
  handleAndStep(reward: number, state: number[], actions: string[]): string;
  calculateEpisodeResult(): number;
}

export class RuntimeAgent {
  constructor(props: {
    states: number[];
    params: { epsilon: number; gamma: number; alpha: number };
  }) {
    const { epsilon, gamma, alpha } = props.params;
    this.epsilon = epsilon;
    this.gamma = gamma;
    this.alpha = alpha;
    this.actionValues = {} as Map<number>;
    this.returnsMap = {} as Map<number[]>;
    this.rewardsList = [];
  }
}

class MonteCarloAgent extends RuntimeAgent {
  constructor(props: {
    states: number[];
    params: { epsilon: number; gamma: number; alpha: number };
  }) {
    super(props);
    const { epsilon, gamma, alpha } = props.params;
    this.epsilon = epsilon;
    this.gamma = gamma;
    this.alpha = alpha;
    this.actionValues = {} as Map<number>;
    this.returnsMap = {} as Map<number[]>;
    this.rewardsList = [];
  }
}
class SARSAAgent extends RuntimeAgent {
  constructor(props: {
    states: number[];
    params: { epsilon: number; gamma: number; alpha: number };
  }) {
    super(props);
    const { epsilon, gamma, alpha } = props.params;
    this.epsilon = epsilon;
    this.gamma = gamma;
    this.alpha = alpha;
    this.actionValues = {} as Map<number>;
    this.returnsMap = {} as Map<number[]>;
    this.rewardsList = [];
  }
}
class QLearningAgent extends RuntimeAgent {
  constructor(props: {
    states: number[];
    params: { epsilon: number; gamma: number; alpha: number };
  }) {
    super(props);
    const { epsilon, gamma, alpha } = props.params;
    this.epsilon = epsilon;
    this.gamma = gamma;
    this.alpha = alpha;
    this.actionValues = {} as Map<number>;
    this.returnsMap = {} as Map<number[]>;
    this.rewardsList = [];
  }
}
class DoubleQLearningAgent extends RuntimeAgent {
  constructor(props: {
    states: number[];
    params: { epsilon: number; gamma: number; alpha: number };
  }) {
    super(props);
    const { epsilon, gamma, alpha } = props.params;
    this.epsilon = epsilon;
    this.gamma = gamma;
    this.alpha = alpha;
    this.actionValues = {} as Map<number>;
    this.returnsMap = {} as Map<number[]>;
    this.rewardsList = [];
  }
}
class NSomethingOrOtherAgent extends RuntimeAgent {
  constructor(props: {
    states: number[];
    params: { epsilon: number; gamma: number; alpha: number };
  }) {
    super(props);
    const { epsilon, gamma, alpha } = props.params;
    this.epsilon = epsilon;
    this.gamma = gamma;
    this.alpha = alpha;
    this.actionValues = {} as Map<number>;
    this.returnsMap = {} as Map<number[]>;
    this.rewardsList = [];
  }
}

const MONTE_CARLO = MonteCarloAgent;
const SARSA = SARSAAgent;
const Q_LEARNING = QLearningAgent;
const DOUBLE_Q_LEARNING = DoubleQLearningAgent;
const N_SOMETHINGOROTHER = NSomethingOrOtherAgent;

export const runtimeAgents: AgentKeys<Function> = {
  MONTE_CARLO,
  SARSA,
  Q_LEARNING,
  DOUBLE_Q_LEARNING,
  N_SOMETHINGOROTHER,
};
