import React from 'react';
import { AgentType, ThemeType, AgentParameter } from 'contexts';
import { Box, Button } from 'rebass';
import { CSSObject } from 'styled-components';

const letterMap = {
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  epsilon: 'ε',
};

const getInfoCss = (theme: ThemeType): CSSObject => ({
  color: theme.onBackground,
  backgroundColor: theme.background,
  border: `2px solid ${theme.primary}`,
  borderRadius: '0px',
  flexGrow: 5,
  display: 'flex',
  outline: 'none',
});

const getRemoveCss = (theme: ThemeType): CSSObject => ({
  color: theme.onBackground,
  backgroundColor: theme.background,
  margin: '2px',
  outline: 'none',
});

const InfoPanel: React.FunctionComponent<{
  theme: ThemeType;
  agent: AgentType;
  edit: (agent: AgentType) => void;
  remove: (id: string) => void;
}> = ({ theme, agent, edit, remove }) => {
  return (
    <Box css={getInfoCss(theme)}>
      <Box
        css={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => edit(agent)}
      >
        <DisplayName name={agent.displayName} />
        <DisplayParams params={agent.params} />
      </Box>
      <Button css={getRemoveCss(theme)} onClick={() => remove(agent.id)}>
        x
      </Button>
    </Box>
  );
};

const DisplayName: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <Box css={{ flexGrow: 1, marginLeft: '5%', textAlign: 'left' }}>{name}</Box>
);

const DisplayParams: React.FunctionComponent<{ params: AgentParameter[] }> = ({
  params,
}) => (
  <Box css={{ flexGrow: 1, marginRight: '10%', textAlign: 'right' }}>
    {params.map((param) => `${letterMap[param.name]}: ${param.value + '  '}`)}
  </Box>
);

export default InfoPanel;
