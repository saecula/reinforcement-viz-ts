import React from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import StartButton from './StartButton';
import AgentsList from './AgentsList';
import ResultsGraphs from './ResultsGraphs';

const css: CSSObject = {
  bottom: '0px',
  justifyContent: 'space-around',
  width: '100%',
  display: 'flex',
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  overflow: 'hidden',
  marginBottom: '10px',
  marginTop: '10px',
};

const Dashboard: React.FunctionComponent = () => {
  return (
    <Box css={css}>
      <StartButton />
      <AgentsList />
      <ResultsGraphs />
    </Box>
  );
};

export default Dashboard;
