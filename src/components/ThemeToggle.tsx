import React from 'react';
import { Button } from 'rebass';
import { CSSObject } from 'styled-components';
import { ThemeType } from '../contexts';

const getToggleCss = (theme: ThemeType): CSSObject => ({
  color: theme.onBackground,
  backgroundColor: theme.background,
  fontSize: '17px',
  // todo: switch style
});

const ThemeToggle: React.FunctionComponent<{
  theme: ThemeType;
  toggle: () => void;
}> = (props) => {
  return (
    <Button css={getToggleCss(props.theme)} onClick={props.toggle}>
      light | dark
    </Button>
  );
};

export default ThemeToggle;
