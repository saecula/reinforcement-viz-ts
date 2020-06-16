import React, { useContext } from 'react';
import { ThemeContext, ThemeType } from 'contexts';

const getCss = (theme: ThemeType): React.CSSProperties => ({
  position: 'absolute',
  background: theme.background,
});

const Content: React.FunctionComponent<{}> = () => {
  const { theme } = useContext(ThemeContext);
  return <div style={getCss(theme)}></div>;
};

export default Content;
