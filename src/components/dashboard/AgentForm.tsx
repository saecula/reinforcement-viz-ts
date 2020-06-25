import React from 'react';
import { Box } from 'rebass';
import { Label } from '@rebass/forms';
import { CSSObject } from 'styled-components';
import { ThemeType, AgentType } from 'contexts';
import useAgentForm from './useAgentForm';
import { AgentSelect, ParamInput, ButtonGroup } from './AgentFormSections';

const getFormCss = (theme: ThemeType): CSSObject => ({
  position: 'fixed',
  top: '20vh',
  left: '35vw',
  padding: '20px',
  background: theme.background,
  minWidth: '300px',
});

const AgentForm: React.FunctionComponent<{
  theme: ThemeType;
  agent: AgentType;
  isEdit: boolean;
  closeForm: () => void;
}> = (props) => {
  const { theme, agent, closeForm, isEdit } = props;
  const { handleAgentChange, handleParamChange, handleSubmit } = useAgentForm(
    agent,
    isEdit
  );
  const submitAndClose = (event: React.FormEvent<HTMLDivElement>) => {
    handleSubmit(event);
    closeForm();
  };
  return (
    <Box as="form" onSubmit={submitAndClose} css={getFormCss(theme)}>
      <Label marginBottom="10px">Add/edit Agent</Label>
      <AgentSelect
        theme={theme}
        agentKey={agent.key}
        handleChange={handleAgentChange}
      />
      {agent.params.map((param, idx) => (
        <ParamInput
          key={idx}
          theme={theme}
          param={param}
          handleChange={handleParamChange}
        />
      ))}
      <ButtonGroup theme={theme} closeForm={closeForm} />
    </Box>
  );
};

export default AgentForm;
