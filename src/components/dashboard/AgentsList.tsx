import React, { useState, useContext } from 'react';
import { Button, Box } from 'rebass';
import { CSSObject } from 'styled-components';
import AgentForm from './AgentForm';
import AgentPanel from './AgentPanel';
import { ThemeType, AgentContext } from 'contexts';

const css: CSSObject = {
  width: '33vw',
  height: '33vw',
};

const AgentsList: React.FunctionComponent<{ theme: ThemeType }> = (props) => {
  const { theme } = props;
  const { agents, removeAgent } = useContext(AgentContext);
  const [formView, toggleFormView] = useState(false);
  return (
    <Box css={css}>
      {formView && (
        <AgentForm theme={theme} closeForm={() => toggleFormView(false)} />
      )}
      {agents.map((agent, i) => (
        <AgentPanel key={i} agent={agent} />
      ))}
      <Button
        onClick={() => toggleFormView(true)}
        css={{
          color: theme.onSurface,
          backgroundColor: theme.surface,
          margin: '5px',
        }}
      >
        +
      </Button>
      {/* <Button
        css={{
          color: theme.onSurface,
          backgroundColor: theme.surface,
          margin: '5px',
        }}
      >
        remove!
      </Button> */}
    </Box>
  );
};

export default AgentsList;
