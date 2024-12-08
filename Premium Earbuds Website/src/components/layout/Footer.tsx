import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SONIC</h3>
            <p className="text-gray-400">Experience sound like never before with our premium audio solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>bafna3249@gmail.comm</li>
              <li>1-800-SONIC</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SONIC. All rights reserved.| Developed & Hosted by SUJAL BAFNA (bafna3249@gmail.com)</p>
        </div>
      </div>
    </footer>
  );
}