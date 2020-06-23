import React, { useContext } from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import { ThemeContext } from 'contexts';
import EnvironmentForm from './EnvironmentForm';
import ScenarioViewer from './ScenarioViewer';

const css: CSSObject = {
  display: 'flex',
  padding: '15px',
  flexDirection: 'column',
  width: '100%',
  flex: 2,
};

const Scenarios = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box css={css}>
      <EnvironmentForm theme={theme} />
      <ScenarioViewer theme={theme} />
    </Box>
  );
};

export default Scenarios;
