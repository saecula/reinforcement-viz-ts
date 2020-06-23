import { useState, useContext } from 'react';
import { AgentType } from '.';
import { agentsList } from '../constants';
import AgentContext from './AgentContext';

const useAgentForm = (): {
  editingAgent: AgentType;
  handleAgentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange: (event: React.FormEvent<HTMLDivElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLDivElement>) => void;
} => {
  const { addAgent } = useContext(AgentContext);

  const [editingAgent, setEditingAgent] = useState(agentsList[0]);
  const [params, setParams] = useState(editingAgent.params);
  const setInputs = (name: string, value: string) => {
    const parsed = parseInt(value);
    setParams((prev) =>
      prev.map((p) => (p.name === name ? { ...p, defaultValue: parsed } : p))
    );
  };

  const handleAgentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const { value } = target;
    const newAgent = agentsList.find((a) => a.key === value);
    if (!!newAgent) {
      setEditingAgent(newAgent);
      setParams(newAgent.params);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { name, value } = target;
    setInputs(name, value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    if (event) event.preventDefault();
    addAgent(editingAgent);
  };

  return {
    editingAgent,
    handleAgentChange,
    handleChange,
    handleSubmit,
  };
};

export default useAgentForm;
