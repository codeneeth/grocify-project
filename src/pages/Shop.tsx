import React, { useState } from "react";
import { featuredProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Fruits", "Dairy", "Bakery", "Snacks", "Beverages"];

const Shop = () => {
  const [selected, setSelected] = useState("All");

  const filteredProducts =
    selected === "All"
      ? featuredProducts
      : featuredProducts.filter((p) =>
          p.name.toLowerCase().includes(selected.toLowerCase())
        );

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Shop</h2>

        {/* Category Filter */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
                selected === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
