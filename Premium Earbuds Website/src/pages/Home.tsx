import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Story } from '../components/home/Story';

export function Home() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <Features />
      <FeaturedProducts />
      <Story />
    </main>
  );
}