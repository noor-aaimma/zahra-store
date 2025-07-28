import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "easypaisa",
    paymentInfo: "",
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/"); // Redirect to home if cart is empty
    }
  }, [cartItems, navigate]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!formData.paymentInfo.trim()) {
      alert("Please enter payment details.");
      return;
    }

    const orderData = {
      items: cartItems.map(({ id, name, price, quantity }) => ({
        id,
        name,
        price,
        quantity,
      })),
      customer: {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      },
      paymentMethod: formData.paymentMethod,
      total,
    };

    try {
      const res = await axios.post("http://localhost:5173/api/orders", orderData);
      if (res.status === 201) {
        alert("✅ Order placed successfully!");
        clearCart();
        navigate("/");
      }
    } catch (err) {
      console.error("Order placement failed:", err);
      alert("❌ Failed to place order. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Checkout</h2>

      <form
        onSubmit={handlePlaceOrder}
        className="bg-white shadow rounded-lg p-6 space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 p-3 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full border border-gray-300 p-3 rounded"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          required
          className="w-full border border-gray-300 p-3 rounded"
          rows="3"
          value={formData.address}
          onChange={handleChange}
        ></textarea>

        <div>
          <label className="block font-medium mb-2 text-gray-700">
            Payment Method:
          </label>
          <div className="space-y-2">
            {["easypaisa", "jazzcash", "card"].map((method) => (
              <label key={method} className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={handleChange}
                />
                {method === "easypaisa"
                  ? "EasyPaisa"
                  : method === "jazzcash"
                  ? "JazzCash"
                  : "Credit/Debit Card"}
              </label>
            ))}
          </div>
        </div>

        {/* Dynamic Payment Info Field */}
        <input
          type="text"
          name="paymentInfo"
          placeholder={
            formData.paymentMethod === "card" ? "Card Number" : "Mobile Number"
          }
          required
          className="w-full border border-gray-300 p-3 rounded"
          value={formData.paymentInfo}
          onChange={handleChange}
        />

        <div className="border-t pt-4 flex justify-between items-center">
          <p className="text-lg font-semibold">
            Total: <span className="text-pink-600">Rs {total}</span>
          </p>
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
