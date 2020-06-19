import React from 'react';
import Scenarios from './scenarios';
import Dashboard from './dashboard';

const Content: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Scenarios />
      <Dashboard />
    </>
  );
};

export default Content;
