import React from 'react';
import Card from '../Common/Card';
import Button from '../Common/Button';

export default function ProductCard({ product, onAddToBag }) {
  const { id, name, description, price, image, inStock } = product;

  return (
    <Card className="flex flex-col h-full justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <div className="w-full h-48 bg-zinc-100 rounded-lg overflow-hidden mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg font-bold text-zinc-900">{name}</h3>
        <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{description}</p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xl font-extrabold text-zinc-900">${price}</span>
        
        <Button 
          variant={inStock ? 'primary' : 'secondary'}
          disabled={!inStock}
          onClick={() => onAddToBag(id)}
        >
          {inStock ? 'Agregar' : 'Agotado'}
        </Button>
      </div>
    </Card>
  );
}