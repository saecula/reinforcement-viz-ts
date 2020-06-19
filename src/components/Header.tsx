import React, { useContext } from 'react';
import { Box } from 'rebass';
import { ThemeContext, ThemeType } from 'contexts';
import ThemeToggle from './ThemeToggle';

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

const Title = (props: { theme: ThemeType }) => {
  const css = {
    color: props.theme.onBackground,
  };

  return <Box css={css}>Reinforcement Viz</Box>;
};

export default Header;
