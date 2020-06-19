import React, { useContext } from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import Grid from './Grid';
import { EnvironmentContext } from 'contexts';

const css: CSSObject = {
  minWidth: '40%',
  textAlign: 'center',
  flexGrow: 1,
  flexShrink: 1,
  flexbasis: 'auto',
  minHeight: 0,
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: '10px',
  height: '100%',
  padding: '8px',
  // todo: agent color info
};

export interface FakeEnvType {
  key: string;
  displayName: string;
  states: (any[] | undefined)[];
}

const O = 'white';
const R = 'red';
const B = 'black';

const SingleScenario: React.FunctionComponent = () => {
  const { environment } = useContext(EnvironmentContext);
  return (
    <Box css={css}>
      <Grid env={environment} />
    </Box>
  );
};

export default SingleScenario;
