import React, { useState } from "react";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-pink-300 shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <div className="text-xl font-bold tpinkn5-500 flex items-center gap-2 cursor-pointer">
          <img src="/img.webp" alt="Sapna's Riwaz" className="h-20" />
          {/* <span className="text-lg">Sapna's Riwaz</span> */}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center uppercase">
          <div className="relative group">
            <button className="text-black font-medium uppercase hover:text-pink-500 focus:outline-none">
              Shop
            </button>
            <div className="relative group">
              <div
                className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg w-48 z-10"
              >
                <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Rupatta Suits</span>
                <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Co-ord Sets</span>
                <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Indo Western Dresses</span>
                <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Unstitched Printed Kurta</span>
              </div>
            </div>


          </div>
          <span className="hover:text-pink-500 cursor-pointer">Home</span>
          <span className="hover:text-pink-500 cursor-pointer">About Us</span>
          <span className="hover:text-pink-500 cursor-pointer">Blog</span>
          <span className="hover:text-pink-500 cursor-pointer">Contact Us</span>
          <span className="hover:text-pink-500 cursor-pointer">FAQs</span>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <div className="relative text-gray-700 hover:text-pink-500 cursor-pointer">
            <FaShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <span className="block px-4 py-3 border-b cursor-pointer">Home</span>
          <span className="block px-4 py-3 border-b cursor-pointer">Shop</span>
          <span className="block px-4 py-3 border-b cursor-pointer">About Us</span>
          <span className="block px-4 py-3 border-b cursor-pointer">Blog</span>
          <span className="block px-4 py-3 border-b cursor-pointer">Contact Us</span>
          <span className="block px-4 py-3 border-b cursor-pointer">FAQs</span>
        </div>
      )}
    </header>
  );
};

export default Navbar;
