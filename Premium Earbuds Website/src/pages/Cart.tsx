import React from 'react';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-8">Your Cart</h1>
          <p className="text-gray-400">Your cart is empty</p>
          <Link
            to="/products"
            className="inline-block mt-4 px-6 py-3 bg-cyan-500 text-black rounded-md hover:bg-cyan-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">Your Cart</h1>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-black p-4 rounded-lg border border-cyan-500/20"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-400">{item.name}</h3>
                <p className="text-gray-400">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="p-1 text-gray-400 hover:text-cyan-400"
                >
                  <Minus size={20} />
                </button>
                <span className="text-white">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 text-gray-400 hover:text-cyan-400"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-400 hover:text-red-300"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="text-xl text-cyan-400">
            Total: <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="px-6 py-3 bg-cyan-500 text-black rounded-md hover:bg-cyan-600 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}