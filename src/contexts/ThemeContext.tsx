import React, { createContext } from 'react';
import useTheme from './ThemeState';
import { ThemeType } from 'contexts';

const ThemeContext = createContext<{
  theme: ThemeType;
  toggle: () => void;
}>({
  theme: {} as ThemeType,
  toggle: () => {},
});
ThemeContext.displayName = 'ThemeContext';

export const ThemeProvider: React.FunctionComponent<{}> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
