import { EnvironmentType, AgentType } from 'contexts';

export const defaultEpisodes = 40;

export const defaultBatchSize = 10;

export interface Map<T> {
  [x: string]: T;
}

export type envKeysEnum = 'CLIFF' | 'WIND' | 'TUNNEL' | 'CASINO';
export type agentKeysEnum =
  | 'MONTE_CARLO'
  | 'SARSA'
  | 'Q_LEARNING'
  | 'DOUBLE_Q_LEARNING'
  | 'N_SOMETHINGOROTHER';
export type agentParamsEnum = 'alpha' | 'gamma' | 'epsilon';

export interface ParamKeys {
  alpha: number;
  gamma: number;
  epsilon: number;
}

export interface AgentKeys<T> {
  MONTE_CARLO: T;
  SARSA: T;
  Q_LEARNING: T;
  DOUBLE_Q_LEARNING: T;
  N_SOMETHINGOROTHER: T;
}

export interface EnvironmentKeys<T> {
  CLIFF: T;
  WIND: T;
  TUNNEL: T;
  CASINO: T;
}

const O = 'white';
const R = 'red';
const B = 'black';
const G = 'green';

export const envs: EnvironmentType[] = [
  {
    key: 'CLIFF',
    displayName: 'cliff',
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        B,
        B,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
    ],
  },
  {
    key: 'TUNNEL',
    displayName: 'tunnel',
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        R,
        R,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
    ],
  },
  {
    key: 'WIND',
    displayName: 'wind',
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        G,
        G,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
    ],
  },
  {
    key: 'CASINO',
    displayName: 'casino',
    states: [
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        B,
        O,
        B,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
      ],
      [
        O,
        O,
        O,
        O,
        R,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        O,
        G,
      ],
    ],
  },
];

const alpha = 'alpha';
const gamma = 'gamma';
const epsilon = 'epsilon';

export const agentsList: AgentType[] = [
  {
    id: '0',
    key: 'MONTE_CARLO',
    displayName: 'Monte Carlo',
    params: [
      { name: alpha, value: 0.5 },
      { name: gamma, value: 0.8 },
      { name: epsilon, value: 0.1 },
    ],
  },
  {
    id: '2',
    key: 'SARSA',
    displayName: 'SARSA',
    params: [
      { name: alpha, value: 0.5 },
      { name: gamma, value: 0.2 },
      { name: epsilon, value: 0.1 },
    ],
  },
  {
    id: '3',
    key: 'Q_LEARNING',
    displayName: 'Q learning',
    params: [
      { name: alpha, value: 0.4 },
      { name: gamma, value: 0.8 },
      { name: epsilon, value: 0.1 },
    ],
  },
  {
    id: '4',
    key: 'DOUBLE_Q_LEARNING',
    displayName: 'Double Q learning',
    params: [
      { name: alpha, value: 0.5 },
      { name: gamma, value: 0.8 },
      { name: epsilon, value: 0.1 },
    ],
  },
  {
    id: '5',
    key: 'N_SOMETHINGOROTHER',
    displayName: 'n somethingorother',
    params: [
      { name: alpha, value: 0.5 },
      { name: gamma, value: 0.8 },
      { name: epsilon, value: 0.1 },
    ],
  },
];
