import React, { useContext } from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import Grid from './Grid';
import { EnvironmentContext } from 'contexts';

const css: CSSObject = {
  width: '100%',
  height: '100%',
  textAlign: 'center',
  minHeight: '60vh',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: '10px',
  padding: '8px',
};

const SingleScenario: React.FunctionComponent = () => {
  const { environment } = useContext(EnvironmentContext);
  return (
    <Box css={css}>
      <Grid env={environment} />
    </Box>
  );
};

export default SingleScenario;
