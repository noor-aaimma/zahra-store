// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Pink Embroidered Kurti",
    price: 2499,
    rating: 4,
    description: "Elegant pink kurti with fine embroidery. Perfect for formal wear.",
    image: "https://via.placeholder.com/300x400.png?text=Kurti"
  },
  {
    id: 2,
    name: "Gold Earrings",
    price: 799,
    rating: 5,
    description: "Traditional gold earrings for weddings and parties.",
    image: "https://via.placeholder.com/300x400.png?text=Earrings"
  },
  {
    id: 3,
    name: "Men's Khussa",
    price: 1599,
    rating: 3,
    description: "Comfortable traditional khussa for everyday wear.",
    image: "https://via.placeholder.com/300x400.png?text=Khussa"
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart(); // ✅ Access cart context

  if (!product) return <p className="p-6 text-red-500">Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-pink-600">{product.name}</h2>
          <p className="text-gray-700 mt-2">Rs {product.price}</p>
          <div className="text-yellow-400 mt-1 text-xl">
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
          </div>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <button
            className="mt-6 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
            onClick={() => addToCart(product)} // ✅ Add to cart
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
