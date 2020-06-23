import { useContext } from 'react';
import { AgentType } from '.';
import { agentsList } from '../constants';
import AgentContext from './AgentContext';

const useAgentForm = (
  editingAgent: AgentType
): {
  handleAgentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleParamChange: (event: React.FormEvent<HTMLDivElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLDivElement>) => void;
} => {
  const { agents, addAgent, setAgentById, setEditingAgent } = useContext(
    AgentContext
  );

  const handleAgentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const { value } = target;
    const newAgent = agentsList.find((a) => a.key === value);
    if (!!newAgent) {
      setEditingAgent((prevAgent: AgentType) => ({
        ...newAgent,
        id: prevAgent.id.length > 1 ? prevAgent.id : newAgent.id,
      }));
    }
  };

  const handleParamChange = (event: React.FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { name, value } = target;
    const param = editingAgent.params.find((p) => p.name === name);
    if (!!param) {
      const parsed = parseFloat(value);
      if (parsed !== NaN) param.defaultValue = parseFloat(value);
    }
  };

  const isEdit = () => editingAgent.id.length > 1;

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    if (event) event.preventDefault();
    if (isEdit()) {
      setAgentById(editingAgent.id, editingAgent);
      setEditingAgent(agentsList[0]);
    } else {
      addAgent(editingAgent);
    }
  };

  return {
    handleAgentChange,
    handleParamChange,
    handleSubmit,
  };
};

export default useAgentForm;
