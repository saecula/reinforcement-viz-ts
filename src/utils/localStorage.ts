import { ThemeType, AgentType, EnvironmentType } from 'contexts';

export const getLocal = (key: string): ThemeType | null => {
  const item = localStorage.getItem(key);
  return item === null || item === '[object Object]' ? null : JSON.parse(item);
};

export const setLocal = (key: string, item: {}): void => {
  const stringified = JSON.stringify(item);
  localStorage.setItem(key, stringified);
};
