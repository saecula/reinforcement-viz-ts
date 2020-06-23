import React, { useContext } from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import StartButton from './StartButton';
import AgentsList from './AgentsList';
import ResultsGraphs from './ResultsGraphs';
import { ThemeContext } from 'contexts';

const css: CSSObject = {
  bottom: '0px',
  justifyContent: 'space-around',
  width: '100%',
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
  margin: '10px',
  height: '23%',
  position: 'sticky',
};

const Dashboard: React.FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box css={css}>
      <StartButton />
      <AgentsList theme={theme} />
      <ResultsGraphs />
    </Box>
  );
};

export default Dashboard;
