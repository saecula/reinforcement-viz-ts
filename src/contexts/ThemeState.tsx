import { useState } from 'react';
import { getLocal, setLocal } from '../utils';

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

export const lightTheme: ThemeType = {
  background: '#e3e3e3',
  surface: '#f7f7f7',
  primary: '#ededed',
  secondary: '#0df2c9',
  onBackground: '#1a1a1a',
  onSurface: '#292929',
  onPrimary: '#171717',
  onSecondary: '#d1d1d1',
};

const darkTheme: ThemeType = {
  background: '#171717',
  surface: '#212121',
  primary: '#545454',
  secondary: '#008a6e',
  onBackground: '#bfbfbf',
  onSurface: '#ffffff',
  onPrimary: '#ffffff',
  onSecondary: '#ffffff',
};

export const useTheme = (): {
  theme: ThemeType;
  toggleTheme: () => void;
} => {
  const localTheme = getLocal('theme');
  const [theme, setTheme] = useState(
    localTheme !== null ? localTheme : lightTheme
  );
  const toggleTheme = () => {
    const oppositeTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(oppositeTheme);
    setLocal('theme', oppositeTheme);
  };
  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
