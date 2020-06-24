import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { agentsList } from '../constants';
import { getLocal, setLocal } from 'utils';

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
  setAgentById: (agent: AgentType) => void;
  setEditingAgent: React.Dispatch<React.SetStateAction<AgentType>>;
} => {
  const localAgents = getLocal<AgentType[]>('agents');
  const [agents, setAgents] = useState(
    localAgents !== null ? localAgents : [defaultAgent]
  );
  const [editingAgent, setEditingAgent] = useState(agentsList[0]);

  const addAgent = (agent: AgentType): void =>
    setAgents((prevAgents) => [...prevAgents, { ...agent, id: uuid() }]);
  const removeAgent = (id: string): void =>
    setAgents((prevAgents) => prevAgents.filter((agent) => agent.id !== id));
  const setAgentById = (newAgent: AgentType): void =>
    setAgents((prevAgents) =>
      prevAgents.map((agent) => (agent.id === newAgent.id ? newAgent : agent))
    );

  useEffect(() => setLocal<AgentType[]>('agents', agents), [agents]);

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
