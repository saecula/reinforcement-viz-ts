import { useState, useContext } from 'react';
import { AgentType } from '../../contexts';
import { agentsList } from '../../constants';

const inputsFrom = (agent: AgentType) =>
  agent.params.reduce(
    (allParams, param) => ({ ...allParams, [param.name]: param.defaultValue }),
    {}
  );

const useAgentForm = (): {
  agent: AgentType;
  handleAgentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange: (event: React.FormEvent<HTMLDivElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLDivElement>) => void;
} => {
  //   const { addScenario } = useContext(Ctx);
  //   const { closeForm } = useContext(ScenarioCtx);

  const [agent, setAgent] = useState(agentsList[0]);
  const [inputs, setInputs] = useState(inputsFrom(agent));

  const handleAgentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const { value } = target;
    const newAgent = agentsList.find((a) => a.key === value);
    if (!!newAgent) {
      setAgent(newAgent);
      setInputs(inputsFrom(newAgent));
    }
  };
  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLTextAreaElement;
    const { name, value } = target;
    setInputs({ ...inputs, [name]: parseFloat(value) });
  };
  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    if (event) event.preventDefault();
    const newScenario = {
      name: agent.displayName,
      options: { ...inputs },
    };
    // addScenario(newScenario);
    // closeForm();
  };

  return {
    agent,
    handleAgentChange,
    handleChange,
    handleSubmit,
  };
};

export default useAgentForm;
