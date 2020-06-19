import React, { useContext } from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import { ThemeType, ThemeContext } from 'contexts';
import AgentForm from './AgentForm';
import EnvironmentForm from './EnvironmentForm';
import ScenarioBox from './ScenarioBox';

const getCss = (theme: ThemeType): CSSObject => ({
  display: 'flex',
  padding: '15px',
  backgroundColor: theme.background,
  flexDirection: 'column',
  width: '100%',
  flex: 2,
});

const Scenarios = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box css={getCss(theme)}>
      {false && <AgentForm theme={theme} />}
      <EnvironmentForm theme={theme} />
      <ScenarioBox theme={theme} />
    </Box>
  );
};

export default Scenarios;
