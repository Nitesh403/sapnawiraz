import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-pink-400">SapnaSriwaz</h2>
          <p className="mt-2 text-sm text-gray-300">
            Reviving tradition with a touch of modern elegance. Discover the finest Indo-Western fashion and ethnic wear.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Shop</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
      <div>
  <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
  <div className="flex space-x-4 mb-4">
    <a href="#" className="text-gray-300 hover:text-pink-400 transition"><FaFacebookF /></a>
    <a href="#" className="text-gray-300 hover:text-pink-400 transition"><FaInstagram /></a>
    <a href="#" className="text-gray-300 hover:text-pink-400 transition"><FaTwitter /></a>
  </div>
  {/* Search input with button */}
  <div className="flex items-center bg-gray-800 rounded-md overflow-hidden">
    <input
      type="text"
      placeholder="Search..."
      className="flex-grow px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
    />
    <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold transition">
      Search
    </button>
  </div>
</div>


      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SapnaSriwaz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

