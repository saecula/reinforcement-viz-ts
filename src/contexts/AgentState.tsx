import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { agentsList, agentParamsEnum, agentKeysEnum } from '../constants';
import { getLocal, setLocal } from 'utils';

export interface AgentParameter {
  name: agentParamsEnum;
  value: number;
}

export interface AgentType {
  id: string;
  key: agentKeysEnum;
  displayName: string;
  params: AgentParameter[];
}

export const defaultAgent: AgentType = {
  id: uuid(),
  key: 'MONTE_CARLO',
  displayName: 'Monte Carlo',
  params: [
    { name: 'alpha', value: 0.5 },
    { name: 'gamma', value: 0.8 },
    { name: 'epsilon', value: 0.1 },
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
