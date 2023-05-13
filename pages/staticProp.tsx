export async function fetchProducts() {
  const res = await fetch("https://tbr.tonnipaul.com//api/products");
  const products = await res.json();
  return products;
}
