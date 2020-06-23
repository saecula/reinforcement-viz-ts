import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface AgentParameter {
  name: 'alpha' | 'beta' | 'gamma' | 'epsilon';
  defaultValue: number;
}

export interface AgentType {
  id: string;
  key: string;
  displayName: string;
  params: AgentParameter[];
}

export const defaultAgent: AgentType = {
  id: uuid(),
  key: 'MONTE_CARLO',
  displayName: 'Monte Carlo',
  params: [
    { name: 'alpha', defaultValue: 0.5 },
    { name: 'gamma', defaultValue: 0.8 },
    { name: 'epsilon', defaultValue: 0.1 },
  ],
};

const useAgents = (): {
  agents: AgentType[];
  addAgent: (agent: AgentType) => void;
  removeAgent: (id: string) => void;
} => {
  const [agents, setAgents] = useState([defaultAgent]);
  const addAgent = (agent: AgentType): void =>
    setAgents((prevAgents) => [...prevAgents, { ...agent, id: uuid() }]);
  const removeAgent = (id: string): void =>
    setAgents((prevAgents) => prevAgents.filter((agent) => agent.id !== id));
  return {
    agents,
    addAgent,
    removeAgent,
  };
};

export default useAgents;
