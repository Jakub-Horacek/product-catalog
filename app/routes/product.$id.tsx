import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { api } from "../services/api";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id!, 10);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => api.getProduct(productId),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 mb-4">Error loading product. Please try again later.</div>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-8 inline-block">
        ← Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-2xl font-bold">${product.price}</span>
          </div>
          <div className="mb-4">
            <span className="text-yellow-400">★</span>
            <span className="ml-1">{product.rating.rate}</span>
            <span className="text-gray-500 ml-2">({product.rating.count} reviews)</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600">Category: </span>
            <span className="capitalize">{product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
