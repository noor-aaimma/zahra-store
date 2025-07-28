// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty.{" "}
          <Link to="/" className="text-pink-600 underline hover:text-pink-700">
            Go shopping
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id || item.id}
                className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
              >
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Rs {item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id || item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold text-gray-800">
              Total: Rs {total.toLocaleString()}
            </p>
            <Link to="/checkout">
              <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
