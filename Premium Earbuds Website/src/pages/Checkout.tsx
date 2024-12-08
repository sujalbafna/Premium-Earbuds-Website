import React from 'react';
import { useCart } from '../hooks/useCart';
import { CreditCard, Truck, Shield } from 'lucide-react';

export function Checkout() {
  const { items, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-black p-6 rounded-lg border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Shipping Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyan-400 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-cyan-400 mb-2">Address</label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-cyan-400 mb-2">City</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-400 mb-2">State</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-400 mb-2">ZIP</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-black p-6 rounded-lg border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Payment Information</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-cyan-400 mb-2">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="**** **** **** ****"
                    />
                    <CreditCard className="absolute right-3 top-2.5 text-gray-400" size={20} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyan-400 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-400 mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                      placeholder="***"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black p-6 rounded-lg border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-cyan-400">{item.name}</h3>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-purple-400">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="border-t border-cyan-500/20 pt-4 mt-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-cyan-400">Total:</span>
                    <span className="text-purple-400 font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Truck className="text-cyan-400" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Shield className="text-cyan-400" />
                <span>Secure payment processing</span>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyber-pink to-cyber-purple text-white rounded-md hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300 font-bold text-lg">
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}