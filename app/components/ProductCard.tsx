import { Link } from "react-router";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="block p-4 border rounded-lg hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="ml-1">{product.rating.rate}</span>
        </div>
      </div>
    </Link>
  );
}
