export async function fetchProducts() {
  const res = await fetch("https://tbr.tonnipaul.com//api/products");
  const products = await res.json();
  return products;
}


export const fetchProductById = async (id: string) => {
  const res = await fetch(`https://tbr.tonnipaul.com/api/products/${id}`);
  const data = await res.json();
  return data;
};