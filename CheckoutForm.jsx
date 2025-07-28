// src/components/CheckoutForm.jsx
import React, { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [cartItems, setCartItems] = useState([
    {
      productId: "12345",
      quantity: 2,
    },
  ]);

  const handleOrder = async () => {
    try {
      const orderData = {
        products: cartItems,
        totalAmount: 5000,
        customerInfo: customer,
      };

      const res = await axios.post("http://localhost:5000/api/orders", orderData);
      console.log("Order placed:", res.data);
      alert("Order placed successfully!");
    } catch (err) {
      console.error("Order failed:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <input
        type="text"
        placeholder="Name"
        className="block border mb-2 p-2 w-full"
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        className="block border mb-2 p-2 w-full"
        value={customer.phone}
        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        className="block border mb-4 p-2 w-full"
        value={customer.address}
        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
      />
      <button
        className="bg-pink-500 text-white px-4 py-2 rounded"
        onClick={handleOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutForm;
