import { useContext } from 'react';
import { AgentType } from '../../contexts';
import { agentsList } from '../../constants';
import AgentContext from '../../contexts/AgentContext';

const useAgentForm = (
  editingAgent: AgentType,
  isEdit: boolean
): {
  handleAgentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleParamChange: (event: React.FormEvent<HTMLDivElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLDivElement>) => void;
} => {
  console.log('begin with editing agent:', editingAgent);
  const { addAgent, setAgentById, setEditingAgent } = useContext(AgentContext);

  const handleAgentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const { value } = target;
    const newAgent = agentsList.find((a) => a.key === value);
    if (!!newAgent) {
      console.log('we setting new agent?');
      const newSpecAgent = { ...newAgent, id: editingAgent.id };
      console.log('if isEdit', isEdit, ': newagentset:', newSpecAgent);
      setEditingAgent((prevAgent: AgentType) => ({
        ...newAgent,
        id: isEdit ? prevAgent.id : newAgent.id,
      }));
    }
  };

  const handleParamChange = (event: React.FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { name, value } = target;
    const param = editingAgent.params.find((p) => p.name === name);
    if (!!param) {
      const parsed = parseFloat(value);
      if (!isNaN(parsed)) param.value = parseFloat(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    if (event) event.preventDefault();
    if (isEdit) {
      setAgentById(editingAgent);
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
