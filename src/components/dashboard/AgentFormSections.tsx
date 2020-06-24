import React from 'react';
import { Button } from 'rebass';
import { Select, Input } from '@rebass/forms';
import { ThemeType } from 'contexts';
import { agentsList } from '../../constants';
import { AgentParameter } from 'contexts/AgentState';

export const AgentSelect: React.FunctionComponent<{
  theme: ThemeType;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ theme, name, handleChange }) => (
  <Select
    css={{
      backgroundColor: theme.surface,
      color: theme.onSurface,
      border: 'none',
      borderRadius: '0px',
      outline: 'none',
    }}
    defaultValue={name}
    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
      handleChange(event)
    }
  >
    {agentsList.map((a, idx) => (
      <option key={idx} value={a.key}>
        {a.displayName}
      </option>
    ))}
  </Select>
);

export const ParamInput: React.FunctionComponent<{
  theme: ThemeType;
  param: AgentParameter;
  handleChange: (event: React.FormEvent<HTMLDivElement>) => void;
}> = ({ theme, param, handleChange }) => (
  <Input
    css={{
      backgroundColor: theme.surface,
      color: theme.onSurface,
      border: 'none',
      outline: 'none',
    }}
    defaultValue={param.defaultValue.toString()}
    name={param.name}
    onChange={handleChange}
  ></Input>
);

export const ButtonGroup: React.FunctionComponent<{
  theme: ThemeType;
  closeForm: () => void;
}> = ({ theme, closeForm }) => (
  <>
    <Button
      type="submit"
      css={{
        backgroundColor: theme.primary,
        color: theme.onPrimary,
        margin: '10px',
      }}
    >
      ok
    </Button>
    <Button
      css={{
        backgroundColor: theme.surface,
        color: theme.onSurface,
        margin: '10px',
      }}
      onClick={closeForm}
    >
      cancel
    </Button>
  </>
);
