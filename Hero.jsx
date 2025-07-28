// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-200 to-pink-400 text-white py-16 text-center">
      <h2 className="text-4xl font-extrabold mb-4">Welcome to Zahra</h2>
      <p className="text-lg">Shop Stylish Fashion, Jewelry & More at Best Prices</p>
      <button className="mt-6 bg-white text-pink-500 font-semibold px-6 py-2 rounded-full hover:shadow-lg">
        Shop Now
      </button>
    </section>
  );
}
