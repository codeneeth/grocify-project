import { useParams } from "react-router-dom";
import { featuredProducts } from "../data/products";
import { ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = featuredProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center py-12 text-gray-500">Product not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-xl shadow-md"
      />

      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-green-600 text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-6">
          This is a high quality grocery item, sourced fresh and delivered fast. You can write a real product description here later.
        </p>

        <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition text-sm font-medium">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
