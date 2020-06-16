import React, { useContext } from 'react';
import { Box, Button } from 'rebass';
import { CSSObject } from 'styled-components';
import { ThemeContext, ThemeType } from 'contexts';

const getCss = (theme: ThemeType) => ({
  display: 'flex',
  padding: '10px',
  alignText: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontSize: '1.7em',
  color: theme.onBackground,
  backgroundColor: theme.background,
  top: '0px',
  left: '0px',
  width: '100%',
});

const Header: React.FunctionComponent<{}> = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <Box style={getCss(theme)}>
      <Title theme={theme} />
      <ThemeToggle theme={theme} toggle={toggle} />
    </Box>
  );
};

const Title = (props: { theme: ThemeType }) => (
  <Box
    css={{
      color: props.theme.onBackground,
    }}
  >
    Reinforcement Viz
  </Box>
);

const getToggleCss = (theme: ThemeType): CSSObject => ({
  color: theme.onBackground,
  backgroundColor: theme.background,
  fontSize: '17px',
});

const ThemeToggle = (props: {
  theme: ThemeType;
  toggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <Button css={getToggleCss(props.theme)} onClick={props.toggle}>
      light | dark
    </Button>
  );
};

export default Header;
