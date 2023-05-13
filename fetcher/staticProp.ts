import data from "../public/json/products.json";

export const getProducts = () => data;
export const getProductById = (productId: string) =>
  data.find((p) => p.id === productId) || null;

export async function fetchProducts() {
  const res = await fetch("https://tbr.tonnipaul.com/api/products");
  const products = await res.json();
  return products;
}
