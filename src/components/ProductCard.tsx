import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      <Link to={`/product/${product.id}`} className="group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-green-600 font-medium mb-4">${product.price.toFixed(2)}</p>
        <button
          className="mt-auto inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition text-sm font-medium"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
