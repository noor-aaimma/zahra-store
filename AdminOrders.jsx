import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, idx) => (
          <div key={idx} className="mb-6 border-b pb-4">
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Payment:</strong> {order.paymentMethod}</p>
            <p><strong>Total:</strong> Rs {order.total}</p>
            <p className="mt-2"><strong>Items:</strong></p>
            <ul className="ml-4 list-disc">
              {order.cartItems.map((item, i) => (
                <li key={i}>
                  {item.name} (Rs {item.price} × {item.quantity})
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
