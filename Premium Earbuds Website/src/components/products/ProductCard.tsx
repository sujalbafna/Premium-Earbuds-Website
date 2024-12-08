import React from 'react';
import { Product } from '../../data/products';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-black border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyber-pink transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-400 group-hover:text-cyber-blue transition-colors duration-300">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 hover:bg-cyber-pink text-black rounded-md transition-colors duration-300"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}