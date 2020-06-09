import React, { createContext } from 'react';

const ThemeContext = createContext({
  background: 'lightgrey',
  foreground: 'darkgrey',
  highlight: 'green',
});

export const ThemeProvider: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <ThemeContext.Provider
      value={{
        background: '#FAFAFA',
        foreground: 'darkgray',
        highlight: 'green',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
