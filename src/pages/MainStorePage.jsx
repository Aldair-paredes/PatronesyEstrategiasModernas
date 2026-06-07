import React, { useContext, useState, lazy, Suspense } from 'react';
import { CartContext } from '../context/CartContext';
import Searcher from '../reusable/Searcher';
import ProductListContainer from '../product/ProductListContainer';
import Card from '../reusable/Card';

const CartCheckout = lazy(() => import('../cart/CartCheckout'));

export default function MainStorePage() {
  const { items, addItem, totalItems } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePaymentConfirm = () => {
    alert('¡Orden procesada con éxito! Tus mangas de Panini van en camino.');
    window.localStorage.removeItem('panini-cart');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50 px-4 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight text-zinc-900 flex items-center gap-2">
            PANINI <span className="text-amber-500 font-medium text-lg">Cómics & Manga</span>
          </h1>          
          <div className="bg-zinc-100 px-4 py-2 rounded-xl border border-zinc-200 font-bold flex items-center gap-2 shadow-sm text-sm text-zinc-700">
            <svg 
              className="w-5 h-5 text-amber-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-amber-600 font-black">{totalItems}</span> tomos
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-zinc-800">Catálogo de Lanzamientos</h2>
          <Searcher 
            data={[]} 
            searchKey="name"
            render={() => <ProductListContainer onAddItemToCart={addItem} />}
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-zinc-800">Tu Pedido</h2>
          <Card className="p-5">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-zinc-400 space-y-2">
                <svg className="w-8 h-8 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-sm">No has agregado ningún tomo aún.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-zinc-100 pb-3 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-sm text-zinc-800">{item.name}</h4>
                      <p className="text-xs text-zinc-400">Cantidad: {item.quantity}</p>
                    </div>
                    <span className="font-extrabold text-sm text-zinc-900">${item.price * item.quantity}</span>
                  </div>
                ))}
                
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full mt-4 bg-zinc-900 text-white font-bold py-2.5 rounded-xl hover:bg-zinc-800 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
                >
                  Proceder al Pago (${totalPrice})
                </button>
              </div>
            )}
          </Card>
          {showCheckout && (
            <Suspense fallback={
              <div className="flex items-center justify-center gap-2 py-6 text-zinc-500 font-medium">
                <svg className="animate-spin h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Cargando pasarela segura...</span>
              </div>
            }>
              <CartCheckout total={totalPrice} onConfirm={handlePaymentConfirm} />
            </Suspense>
          )}
        </div>

      </main>
    </div>
  );
}