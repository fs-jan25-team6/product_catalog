import { localStorageKey } from '../enums/localStorageKey';

export function loadFromLocalStorage<T>(key: localStorageKey): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : ([] as T);
  } catch (error) {
    console.error(`Error reading "${key}" from localStorage:`, error);
    return [] as T;
  }
}

export function saveToLocalStorage<T>(key: localStorageKey, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving "${key}" to localStorage:`, error);
  }
}
