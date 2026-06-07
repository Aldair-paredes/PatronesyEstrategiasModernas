import React from 'react';
import { CartProvider } from './context/CartContext';
import MainStorePage from './pages/MainStorePage';

export default function App() {
  return (
    <CartProvider>
      <MainStorePage />
    </CartProvider>
  );
}