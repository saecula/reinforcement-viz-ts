import React, { createContext, useState } from 'react';

export interface ThemeType {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  onBackground: string;
  onSurface: string;
  onPrimary: string;
  onSecondary: string;
}

const lightTheme: ThemeType = {
  background: '#f2f2f2',
  surface: '#f7f7f7',
  primary: '#4EC5F1',
  secondary: '#0df2c9',
  onBackground: '#1a1a1a',
  onSurface: '#292929',
  onPrimary: '#4EC5F1',
  onSecondary: '#d1d1d1',
};

const darkTheme: ThemeType = {
  background: '#0a0a0a',
  surface: '#121212',
  primary: '#00f0c0',
  secondary: '#008a6e',
  onBackground: '#bfbfbf',
  onSurface: '#ffffff',
  onPrimary: '#ffffff',
  onSecondary: '#ffffff',
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
});
ThemeContext.displayName = 'ThemeContext';

export const ThemeProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () =>
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  return (
    <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
