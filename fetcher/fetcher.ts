import { AllProducts } from "@/interface/AllProduct";

export let myProduct: AllProducts[] = [];
export async function fetchProducts() {
  const res = await fetch("https://tbr.tonnipaul.com/api/products");
  const products = await res.json();
  myProduct = products;
  return products;
}

export const fetchProductId = (productId: string) =>
  myProduct.find((p) => p.id === productId);
