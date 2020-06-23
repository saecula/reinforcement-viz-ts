import React, { useState, useContext } from 'react';
import { Button, Box } from 'rebass';
import { CSSObject } from 'styled-components';
import AgentForm from './AgentForm';
import AgentPanel from './AgentPanel';
import { ThemeType, AgentContext } from 'contexts';

const css: CSSObject = {
  width: '33vw',
  textAlign: 'center',
  alignItems: 'stretch',
  flexGrow: 2,
};

const AgentsList: React.FunctionComponent<{ theme: ThemeType }> = (props) => {
  const { theme } = props;
  const { agents, removeAgent } = useContext(AgentContext);
  const [formView, toggleFormView] = useState(false);
  return (
    <Box css={css}>
      {formView && (
        <AgentForm
          agent={null}
          theme={theme}
          closeForm={() => toggleFormView(false)}
        />
      )}
      {agents.map((agent, i) => (
        <AgentPanel
          key={i}
          hasAgent={{
            agent,
            edit: () => toggleFormView(true),
            remove: removeAgent,
          }}
          theme={theme}
        />
      ))}
      {agents.length < 4 && (
        <AgentPanel add={() => toggleFormView(true)} theme={theme} />
      )}
    </Box>
  );
};

export default AgentsList;
