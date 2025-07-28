import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-pink-600">PKR {product.price}</p>
        </div>
      ))}
    </div>
  );
}
