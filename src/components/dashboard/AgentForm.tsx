import React from 'react';
import { Box, Button } from 'rebass';
import { Label, Select, Input } from '@rebass/forms';
import { ThemeType, useAgentForm, AgentType } from 'contexts';
import { agentsList } from '../../constants';

const AgentForm: React.FunctionComponent<{
  theme: ThemeType;
  agent: AgentType | null;
  closeForm: () => void;
}> = (props) => {
  const { theme, closeForm } = props; //todo: style
  const {
    editingAgent,
    handleAgentChange,
    handleChange,
    handleSubmit,
  } = useAgentForm();

  const handleFormSubmit = (event: React.FormEvent<HTMLDivElement>): void => {
    handleSubmit(event);
    closeForm();
  };

  return (
    <Box
      as="form"
      onSubmit={handleFormSubmit}
      css={{
        position: 'fixed',
        top: '200px',
        padding: '20px',
        background: theme.background,
        minWidth: '300px',
      }}
    >
      <Label marginBottom="10px">Add another Agent</Label>
      <Select
        backgroundColor={theme.surface}
        color={theme.onSurface}
        defaultValue={agentsList[0].displayName}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleAgentChange(event)
        }
      >
        {agentsList.map((a, idx) => (
          <option key={idx} value={a.key}>
            {a.displayName}
          </option>
        ))}
      </Select>
      {editingAgent.params.map((param, idx) => (
        <Box key={idx}>
          <Label margin="5px">{param.name}</Label>
          <Input
            backgroundColor={theme.surface}
            color={theme.onSurface}
            step="any"
            placeholder={param.defaultValue.toString()}
            name={param.name}
            onChange={handleChange}
          ></Input>
        </Box>
      ))}
      <Button type="submit" css={{ color: 'black', marginTop: '10px' }}>
        poof
      </Button>
    </Box>
  );
};

export default AgentForm;
