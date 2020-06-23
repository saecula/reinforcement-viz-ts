import React from 'react';
import { AgentType, ThemeType } from 'contexts';
import { Box, Button } from 'rebass';
import { CSSObject } from 'styled-components';
import { ENGINE_METHOD_DIGESTS } from 'constants';

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
    edit: (agent: AgentType) => void;
    remove: (id: string) => void;
  };
  add?: () => void;
  theme: ThemeType;
}> = ({ hasAgent, add, theme }) => {
  return !!hasAgent ? (
    <Box css={css}>
      <Button
        css={{
          color: theme.onBackground,
          backgroundColor: theme.background,
          borderLeft: `2px solid ${theme.primary}`,
          borderTop: `2px solid ${theme.primary}`,
          borderBottom: `2px solid ${theme.primary}`,
          borderRadius: '0px',
          flexGrow: 5,
          display: 'flex',
          alignContent: 'space-between',
          outline: 'none',
        }}
        onClick={() => hasAgent.edit(hasAgent.agent)}
      >
        <Box
          css={{
            width: '100%',
            display: 'flex',
            alignContent: 'space-between',
          }}
        >
          <Box marginRight="20%">{hasAgent.agent.displayName}</Box>
          <Box css={{ right: '0px' }}>
            {hasAgent.agent.params.map(
              (param) =>
                `${letterMap[param.name]}: ${param.defaultValue + '  '}`
            )}
          </Box>
        </Box>
      </Button>
      <Button
        css={{
          color: theme.onBackground,
          backgroundColor: theme.background,
          borderRight: `2px solid ${theme.primary}`,
          borderTop: `2px solid ${theme.primary}`,
          borderBottom: `2px solid ${theme.primary}`,
          borderRadius: '0px',
          flexGrow: 1,
          outline: 'none',
        }}
        onClick={() => hasAgent.remove(hasAgent.agent.id)}
      >
        x
      </Button>
    </Box>
  ) : (
    <Box css={css}>
      <Button
        css={{
          color: theme.onSurface,
          backgroundColor: theme.surface,
          border: `2px solid ${theme.primary}`,
          borderRadius: '0px',
          flexGrow: 1,
          outline: 'none',
        }}
        onClick={add}
      >
        +
      </Button>
    </Box>
  );
};

export default AgentPanel;
