import React, { useContext } from 'react';
import { Box } from 'rebass';
import { ThemeContext } from 'providers';

const css = (theme: any) => ({
  padding: '10px',
  alignText: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontSize: '1.7em',
  color: theme.foreground,
  backgroundColor: theme.background,
  marginColor: 'darkgrey',
  top: '0px',
  left: '0px',
  width: '100%',
  flex: 0.04,
});

const Header: React.FunctionComponent<{}> = () => {
  const theme = useContext(ThemeContext);
  console.log('theme!', theme);
  return <Box style={css(theme)}>haro</Box>;
};

export default Header;
