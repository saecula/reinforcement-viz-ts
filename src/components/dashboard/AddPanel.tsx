import React from 'react';
import { ThemeType } from 'contexts';
import { Button } from 'rebass';
import { CSSObject } from 'styled-components';

const getAddCss = (theme: ThemeType): CSSObject => ({
  color: theme.onSurface,
  backgroundColor: theme.surface,
  border: `2px solid ${theme.primary}`,
  borderRadius: '0px',
  flexGrow: 1,
  outline: 'none',
});

const AddPanel: React.FunctionComponent<{
  theme: ThemeType;
  onClick: (() => void) | undefined;
}> = ({ theme, onClick }) => {
  return (
    <Button css={getAddCss(theme)} onClick={onClick}>
      +
    </Button>
  );
};

export default AddPanel;
