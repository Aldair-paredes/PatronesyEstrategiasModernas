import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('panini-cart', []);
  const addItem = (product) => {
    setItems((currentItems) => {
      const exists = currentItems.find(item => item.id === product.id);
      if (exists) {
        return currentItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <CartContext.Provider value={{ items, addItem, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}
