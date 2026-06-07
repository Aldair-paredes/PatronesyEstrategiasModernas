import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const localData = window.localStorage.getItem(key);
      return localData ? JSON.parse(localData) : initialValue;
    } catch (error) {
      console.error(`Error leyendo la llave "${key}" en localStorage:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error guardando la llave "${key}" en localStorage:`, error);
    }
  }, [key, value]); 
  return [value, setValue];
}