import React from 'react';
import { Zap, Brain, Cpu } from 'lucide-react';

export function Story() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/10 to-cyber-blue/10 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-blue sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            From Vision to Revolution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Zap className="w-8 h-8 text-cyber-pink" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">The Spark (2020)</h3>
                <p className="text-gray-400">
                  Born from a vision to revolutionize audio technology, SONIC began in a small lab
                  with a team of passionate audio engineers and futurists.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Brain className="w-8 h-8 text-cyber-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">The Breakthrough (2021)</h3>
                <p className="text-gray-400">
                  Our breakthrough came with the development of quantum-enhanced audio processing,
                  allowing us to achieve unprecedented levels of sound clarity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Cpu className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">The Future (2023)</h3>
                <p className="text-gray-400">
                  Today, we're pushing the boundaries of what's possible in audio technology,
                  combining neural interfaces with holographic sound projection.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558478551-1a378f63328e?auto=format&fit=crop&q=80"
                alt="SONIC Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/20 to-cyber-blue/20 mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}