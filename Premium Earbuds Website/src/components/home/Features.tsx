import React from 'react';
import { Battery, Bluetooth, Headphones, Clock } from 'lucide-react';

const features = [
  {
    icon: <Headphones className="w-8 h-8" />,
    title: 'Active Noise Cancellation',
    description: 'Block out the world and immerse yourself in pure audio bliss'
  },
  {
    icon: <Bluetooth className="w-8 h-8" />,
    title: 'Bluetooth 5.2',
    description: 'Stable connection and seamless device switching'
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: '20-Hour Battery Life',
    description: 'All-day listening with quick charging capability'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Ergonomic Design',
    description: 'Comfortable fit for extended wearing periods'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-blue sm:text-4xl">
            Premium Features
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Experience the perfect blend of technology and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 
                         hover:border-cyan-500 transition-all duration-300 hover:transform hover:-translate-y-1
                         hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/10 to-cyber-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-cyber-pink transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}