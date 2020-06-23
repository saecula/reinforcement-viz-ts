import React from 'react';
import { AgentType, ThemeType } from 'contexts';
import { Box, Button } from 'rebass';
import { CSSObject } from 'styled-components';

const css: CSSObject = {
  display: 'flex',
  height: '25%',
};

const letterMap = {
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  epsilon: 'ε',
};

// todo: this is horrrrrible

const AgentPanel: React.FunctionComponent<{
  key?: number;
  hasAgent?: {
    agent: AgentType;
    edit: () => void;
    remove: (id: string) => void;
  };
  add?: () => void;
  theme: ThemeType;
}> = ({ hasAgent, add }) => {
  return !!hasAgent ? (
    <Box css={css}>
      <Button
        css={{
          color: 'black',
          borderRadius: '0px',
          flexGrow: 5,
          display: 'flex',
          alignContent: 'space-between',
        }}
      >
        <Box marginRight="20%">{hasAgent.agent.displayName}</Box>
        <Box css={{ right: '0px' }}>
          {hasAgent.agent.params.map(
            (param) => `${letterMap[param.name]}: ${param.defaultValue + '  '}`
          )}
        </Box>
      </Button>
      <Button
        css={{ color: 'black', borderRadius: '0px', flexGrow: 1 }}
        onClick={() => hasAgent.remove(hasAgent.agent.id)}
      >
        x
      </Button>
    </Box>
  ) : (
    <Box css={css}>
      <Button
        css={{ color: 'black', borderRadius: '0px', flexGrow: 1 }}
        onClick={add}
      >
        +
      </Button>
    </Box>
  );
};

export default AgentPanel;
