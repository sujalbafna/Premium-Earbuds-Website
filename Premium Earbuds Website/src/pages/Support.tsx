import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export function Support() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black p-6 rounded-lg border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="text-cyan-400 cursor-pointer hover:text-cyan-300">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          
          <div className="bg-black p-6 rounded-lg border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-cyan-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-cyan-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-cyan-400 mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-900 border border-cyan-500/20 rounded px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 text-black rounded-md hover:bg-cyan-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 text-cyan-400">
            <Phone className="w-6 h-6" />
            <span>1-800-SONIC</span>
          </div>
          <div className="flex items-center space-x-4 text-cyan-400">
            <Mail className="w-6 h-6" />
            <span>support@sonic.com</span>
          </div>
          <div className="flex items-center space-x-4 text-cyan-400">
            <MessageSquare className="w-6 h-6" />
            <span>Live Chat Available 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How do I pair my SONIC earbuds?",
    answer: "Turn on Bluetooth on your device, open the earbud case, and select SONIC from your device's Bluetooth menu."
  },
  {
    question: "What's the battery life?",
    answer: "Our earbuds provide up to 20 hours of playback with the charging case, with each charge lasting 5-6 hours."
  },
  {
    question: "Are SONIC earbuds water-resistant?",
    answer: "Yes, all our earbuds are IPX5 water-resistant, making them perfect for workouts and light rain."
  },
  {
    question: "How do I claim warranty?",
    answer: "Register your product on our website and contact support with your proof of purchase for warranty claims."
  }
];