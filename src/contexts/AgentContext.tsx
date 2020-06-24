import React, { createContext } from 'react';
import useAgents, { AgentType } from './AgentState';
import { agentsList } from '../constants';

const AgentContext = createContext<{
  agents: Array<AgentType>;
  editingAgent: AgentType;
  addAgent: (agent: AgentType) => void;
  removeAgent: (id: string) => void;
  setAgentById: (agent: AgentType) => void;
  setEditingAgent: React.Dispatch<React.SetStateAction<AgentType>>;
}>({
  agents: [],
  editingAgent: agentsList[0],
  addAgent: (agent: AgentType) => {},
  removeAgent: (id: string) => {},
  setAgentById: (agent: AgentType) => {},
  setEditingAgent: () => {},
});

export const AgentProvider: React.FunctionComponent<{}> = ({ children }) => {
  const {
    agents,
    editingAgent,
    addAgent,
    removeAgent,
    setAgentById,
    setEditingAgent,
  } = useAgents();

  return (
    <AgentContext.Provider
      value={{
        agents,
        editingAgent,
        addAgent,
        removeAgent,
        setAgentById,
        setEditingAgent,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export default AgentContext;
