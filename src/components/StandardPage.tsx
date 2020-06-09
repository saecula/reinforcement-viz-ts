import React from 'react';
import Header from './Header';
import Background from './Background';

const StandardPage: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <>
      <Header />
      <Background>{children}</Background>
    </>
  );
};

export default StandardPage;
