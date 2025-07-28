// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const allProducts = [
  "Pink Kurti",
  "Baby Frock",
  "Lipstick Set",
  "Face Cream",
  "Toy Truck",
  "Jewelry Box",
  "Men’s Shirt",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = allProducts.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-300 to-pink-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo and Brand */}
          <a
            href="/"
            className="flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
          >
            <img
              src = "https://i.postimg.cc/4yDqpx2c/c59be770-477f-4c4d-9d61-2c61f86d52a0.png"
              alt="Zahra Logo"
              className="w-10 h-10 rounded-full animate-pulse"
            />
            
          </a>

          {/* Search Bar (Desktop only) */}
          <div className="hidden md:flex items-center mx-6">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-1 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring focus:ring-white transition-all duration-300 w-64"
            />
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden focus:outline-none transition duration-300 transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-lg">
            <li><a href="/" className="hover:underline transition">Home</a></li>
            <li><a href="/categories" className="hover:underline transition">Categories</a></li>
            <li><a href="/cart" className="hover:underline transition">Cart</a></li>
            <li><a href="/contact" className="hover:underline transition">Contact</a></li>
            <Link to="/cart" className="text-pink-600 hover:underline ml-4">🛒 Cart</Link>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 transition duration-300 ease-out">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-1 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring focus:ring-white mb-4"
            />
            <ul className="flex flex-col items-center space-y-3 text-lg font-medium">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/categories" className="hover:underline">Categories</a></li>
              <li><a href="/cart" className="hover:underline">Cart</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <Link to="/cart" className="text-pink-600 hover:underline ml-4">🛒 Cart</Link>
            </ul>
          </div>
        )}
      </nav>

      {/* Push content below fixed navbar */}
      <div className="h-24"></div>

      {/* Filtered Product Results */}
      {query && (
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-xl font-semibold mb-2">
            Search Results for: <span className="text-pink-600">"{query}"</span>
          </h2>
          {filtered.length ? (
            <ul className="list-disc ml-6 space-y-1">
              {filtered.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      )}
    </>
  );
}
