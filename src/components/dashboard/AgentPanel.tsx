import React from 'react';
import { AgentType } from 'contexts';
import { Box } from 'rebass';

const AgentPanel: React.FunctionComponent<{
  key: number;
  agent: AgentType;
}> = ({ agent }) => {
  return <Box>{agent.displayName}</Box>;
};

export default AgentPanel;
