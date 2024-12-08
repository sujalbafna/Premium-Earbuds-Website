import React from 'react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">About SONIC</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              At SONIC, we're not just creating audio devices; we're crafting gateways to immersive
              sonic experiences. Our mission is to push the boundaries of what's possible in audio
              technology, bringing you closer to the future of sound.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558478551-1a378f63328e?auto=format&fit=crop&q=80"
                alt="SONIC Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Innovation Timeline</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="text-cyan-400 font-bold">2020</h3>
                <p className="text-gray-300">Founded with a vision for next-gen audio</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="text-cyan-400 font-bold">2021</h3>
                <p className="text-gray-300">Launched our first quantum-enhanced earbuds</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="text-cyan-400 font-bold">2022</h3>
                <p className="text-gray-300">Pioneered neural adaptive noise cancellation</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="text-cyan-400 font-bold">2023</h3>
                <p className="text-gray-300">Introduced holographic audio projection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}