import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Welcome to Zahra!</h1>
        <p className="text-gray-700 mb-8">
          Explore our latest collections in clothing, cosmetics, jewelry, and more.
        </p>
        <Link
          to="/products/all"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
        >
          Shop Now
        </Link>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-4">
          <img
            src="https://via.placeholder.com/300x400.png?text=Kurti"
            alt="Kurti"
            className="rounded-lg w-full"
          />
          <h3 className="mt-3 font-semibold text-lg text-pink-600">Stylish Kurtis</h3>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4">
          <img
            src="https://via.placeholder.com/300x400.png?text=Cosmetics"
            alt="Cosmetics"
            className="rounded-lg w-full"
          />
          <h3 className="mt-3 font-semibold text-lg text-pink-600">Top Cosmetics</h3>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4">
          <img
            src="https://via.placeholder.com/300x400.png?text=Jewelry"
            alt="Jewelry"
            className="rounded-lg w-full"
          />
          <h3 className="mt-3 font-semibold text-lg text-pink-600">Elegant Jewelry</h3>
        </div>
      </div>
    </div>
  );
}
