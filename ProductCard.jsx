// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => navigate(`/product/${product._id}`)} // assuming MongoDB _id
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-pink-600">{product.name}</h3>
        <p className="text-gray-700 mb-2">Rs {product.price}</p>
        <div className="text-yellow-400 mb-2">
          {"★".repeat(product.rating || 4)}{"☆".repeat(5 - (product.rating || 4))}
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
