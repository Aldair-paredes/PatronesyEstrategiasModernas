import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const MOCK_PRODUCTS = [
  { 
    id: 1, 
    name: 'Berserk - Tomo 01', 
    description: 'Edición de lujo del estandarte del manga Seinen. Sigue los pasos de Guts, el Guerrero Negro, en un mundo de fantasía oscura.', 
    price: 169, 
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500', // Marcador visual de manga
    inStock: true 
  },
  { 
    id: 2, 
    name: 'Demon Slayer (Kimetsu no Yaiba) - Tomo 23', 
    description: '¡El gran volumen final! La batalla decisiva contra Muzan Kibutsuji llega a su clímax definitivo. Incluye páginas especiales.', 
    price: 149, 
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500', 
    inStock: true 
  },
  { 
    id: 3, 
    name: 'Spider-Man: Toda una Vida', 
    description: 'Cómic especial en formato de novela gráfica. Una historia única que celebra los 60 años del personaje recorriendo su vida década por década.', 
    price: 349, 
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500', 
    inStock: false 
  }
];

export default function ProductListContainer({ onAddItemToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-500"></div>
        <p className="text-zinc-500 font-medium mt-4">Conectando con el almacén de Panini Cómics...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToBag={onAddItemToCart} 
        />
      ))}
    </div>
  );
}