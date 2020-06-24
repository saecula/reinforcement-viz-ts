export const getLocal = <T>(key: string): T => {
  const item = localStorage.getItem(key);
  return item === null || item === '[object Object]' ? null : JSON.parse(item);
};

export const setLocal = <T>(key: string, item: T): void => {
  const stringified = JSON.stringify(item);
  localStorage.setItem(key, stringified);
};
