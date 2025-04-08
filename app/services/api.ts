import type { Product, ProductsResponse } from "../types/product";

const API_BASE_URL = "https://6691473c26c2a69f6e8f3485.mockapi.io/to-do/products";

export const api = {
  async getProducts(): Promise<ProductsResponse> {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return {
      products: data,
      total: data.length,
    };
  },

  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await response.json();
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  },
};
