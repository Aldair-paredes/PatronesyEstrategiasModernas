import React from 'react';
import Card from '../reusable/Card';
import Button from '../reusable/Button';

export default function CartCheckout({ total, onConfirm }) {
  return (
    <Card className="bg-zinc-50 border-2 border-dashed border-zinc-300 p-6 mt-8">
      <h3 className="text-xl font-bold text-zinc-900 mb-2">Sección de Pago</h3>
      <p className="text-sm text-zinc-600 mb-4">
        Estás a un paso de adquirir tus tomos. Ingresa tus datos de envío para completar la orden.
      </p>

      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-zinc-200 mb-4 shadow-sm">
        <span className="font-medium text-zinc-700">Total a pagar:</span>
        <span className="text-2xl font-black text-amber-500">${total}</span>
      </div>

      <Button variant="primary" className="w-full" onClick={onConfirm}>
        Confirmar y Pagar Orden 
      </Button>
    </Card>
  );
}