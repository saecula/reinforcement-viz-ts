import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface AgentParam {
  name: 'alpha' | 'beta' | 'gamma' | 'epsilon';
  defaultValue: number;
}

export interface AgentType {
  id?: string;
  key: string;
  displayName: string;
  params: AgentParam[];
}

const defaultAgent: AgentType = {
  id: uuid(),
  key: 'MONTE_CARLO',
  displayName: 'Monte Carlo',
  params: [
    { name: 'alpha', defaultValue: 0.5 },
    { name: 'gamma', defaultValue: 0.8 },
    { name: 'epsilon', defaultValue: 0.1 },
  ],
};

const AgentContext = createContext({
  Agents: [defaultAgent],
  utils: {
    addAgent: (agent: AgentType) => {},
    removeAgent: (id: string) => {},
  },
});

export const AgentProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [Agents, setAgents] = useState([defaultAgent]);
  const addAgent = (agent: AgentType): void =>
    setAgents((prevAgents) => [...prevAgents, { ...agent, id: uuid() }]);
  const removeAgent = (id: string): void =>
    setAgents((prevAgents) => prevAgents.filter((agent) => agent.id !== id));
  return (
    <AgentContext.Provider value={{ Agents, utils: { addAgent, removeAgent } }}>
      {children}
    </AgentContext.Provider>
  );
};

export default AgentContext;
