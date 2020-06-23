import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { agentsList } from '../constants';

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
  editingAgent: AgentType;
  addAgent: (agent: AgentType) => void;
  removeAgent: (id: string) => void;
  setAgentById: (id: string, agent: AgentType) => void;
  setEditingAgent: React.Dispatch<React.SetStateAction<AgentType>>;
} => {
  const [agents, setAgents] = useState([defaultAgent]);
  const [editingAgent, setEditingAgent] = useState(agentsList[0]);
  const addAgent = (agent: AgentType): void =>
    setAgents((prevAgents) => [...prevAgents, { ...agent, id: uuid() }]);
  const removeAgent = (id: string): void =>
    setAgents((prevAgents) => prevAgents.filter((agent) => agent.id !== id));
  const setAgentById = (id: string, newAgent: AgentType): void =>
    setAgents((prevAgents) =>
      prevAgents.map((agent) => (agent.id === id ? newAgent : agent))
    );
  return {
    agents,
    editingAgent,
    addAgent,
    removeAgent,
    setAgentById,
    setEditingAgent,
  };
};

export default useAgents;
