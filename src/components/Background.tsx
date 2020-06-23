import React from 'react';
import { ThemeContext, ThemeType } from '../contexts';

const getCss = (theme: ThemeType): React.CSSProperties => ({
  width: '100vw',
  height: '94vh',
  backgroundColor: theme.background,
  color: theme.onBackground,
  position: 'relative',
  top: 0,
  left: 0,
});

const Background: React.FunctionComponent<{}> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  return <div style={getCss(theme)}>{children}</div>;
};

export default Background;
