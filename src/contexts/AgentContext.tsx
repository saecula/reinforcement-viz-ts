import React, { createContext } from 'react';
import useAgents, { AgentType } from './AgentState';

const AgentContext = createContext<{
  agents: Array<AgentType>;
  addAgent: (agent: AgentType) => void;
  removeAgent: (id: string) => void;
}>({
  agents: [],
  addAgent: (agent: AgentType) => {},
  removeAgent: (id: string) => {},
});

export const AgentProvider: React.FunctionComponent<{}> = ({ children }) => {
  const { agents, addAgent, removeAgent } = useAgents();

  return (
    <AgentContext.Provider value={{ agents, addAgent, removeAgent }}>
      {children}
    </AgentContext.Provider>
  );
};

export default AgentContext;
