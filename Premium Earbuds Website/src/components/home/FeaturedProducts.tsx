import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '../products/ProductCard';
import { products } from '../../data/products';

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-blue">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyber-pink transition-colors duration-300"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="relative">
          <div className="flex animate-scroll no-scrollbar">
            {/* First set of products */}
            {products.map((product) => (
              <div 
                key={product.id}
                className="flex-none w-[280px] mx-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
            {/* Duplicated set for seamless scrolling */}
            {products.map((product) => (
              <div 
                key={`${product.id}-duplicate`}
                className="flex-none w-[280px] mx-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}