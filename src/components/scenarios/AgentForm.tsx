import React from 'react';
import { Box, Button } from 'rebass';
import { Label, Select, Input } from '@rebass/forms';
import { ThemeType } from 'contexts';
import { agentsList } from '../../constants';
import useAgentForm from './useAgentForm';

const AgentForm: React.FunctionComponent<{ theme: ThemeType }> = (props) => {
  const { theme } = props; //todo: style
  const {
    agent,
    handleAgentChange,
    handleChange,
    handleSubmit,
  } = useAgentForm();
  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Label>choose an Agent</Label>
      <Select
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
      {agent.params.map((param, idx) => (
        <Box key={idx}>
          <Label>{param.name}</Label>
          <Input
            type="number"
            step="any"
            placeholder={param.defaultValue.toString()}
            name={param.name}
            onChange={handleChange}
          ></Input>
        </Box>
      ))}
      <Button type="submit" color="black">
        poof
      </Button>
    </Box>
  );
};

export default AgentForm;
