// src/components/Categories.jsx
import React from "react";

const categories = {
  "Jewelry": [
    "Watches", "Sets", "Stainless", "Earrings", "Jhumkay", "Bracelets", "Rings", "Bridal Collection"
  ],
  "Home Decor": [
    "Bedroom", "Bathroom", "Table Decor", "Organizers", "Wall Decor"
  ]
};

export default function Categories() {
  return (
    <section className="py-10 px-4 text-center bg-pink-50">
      <h3 className="text-3xl font-bold mb-6 text-pink-600 animate-bounce">Shop by Category</h3>
      <div className="max-w-6xl mx-auto space-y-10">
        {Object.entries(categories).map(([mainCategory, subItems], i) => (
          <div key={i}>
            <h4 className="text-2xl font-semibold text-pink-700 mb-4">{mainCategory}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {subItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-4 hover:bg-pink-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <p className="text-pink-600 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
