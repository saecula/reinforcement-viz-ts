import React, { useContext } from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import { Select, Input, Label } from '@rebass/forms';
import { EnvironmentContext, ThemeType } from 'contexts';
import { envs } from '../../constants';

const css: CSSObject = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  padding: '2px',
};
const getSelectCss = (theme: ThemeType): CSSObject => ({
  minWidth: '120px',
  maxHeight: '50px',
  border: 'none',
  backgroundColor: theme.primary,
  color: theme.onPrimary,
  fontFamily: 'Helvetica',
  padding: '10px',
  WebkitBorderRadius: '0px',
});

const EnvironmentForm: React.FunctionComponent<{ theme: ThemeType }> = (
  props
) => {
  const { theme } = props;
  const { episodes, setEnvironment, setEpisodes } = useContext(
    EnvironmentContext
  );
  return (
    <Box css={css}>
      <Box>
        <Select
          css={getSelectCss(theme)}
          onChange={(e) => setEnvironment(e.target.value)}
        >
          {envs.map((e, idx) => (
            <option key={idx} value={e.key}>
              {e.displayName}
            </option>
          ))}
        </Select>
      </Box>
      <Box pl={5} style={{ display: 'flex', textAlign: 'center' }}>
        <Label style={{ marginTop: '5px' }}>Number of Episodes:</Label>
        <Input
          css={getSelectCss(theme)}
          type="number"
          min="1"
          max="5000"
          defaultValue={episodes}
          onChange={(e) => setEpisodes(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default EnvironmentForm;
