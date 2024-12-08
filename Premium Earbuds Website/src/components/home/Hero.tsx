import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80"
          alt="Premium Earbuds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Experience Sound<br />Like Never Before
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Immerse yourself in crystal-clear audio with our premium wireless earbuds.
          Featuring advanced noise cancellation and exceptional battery life.
        </p>
        <a
          href="/products"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
        >
          Explore Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}