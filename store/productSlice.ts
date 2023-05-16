import { fetchProducts } from "@/fetcher/fetcher";
import { AllProducts } from "@/interface/AllProduct";
import { StateCreator } from "zustand";

export interface ProductSliceType {
  products: AllProducts[];
  fetchProducts: () => void;
}

export const productSlice: StateCreator<ProductSliceType> = (set) => ({
  // function to fetch products
  products: [],
  fetchProducts: async () => {
    const res = await fetchProducts();
    set({ products: await res.json() });
  },
});
