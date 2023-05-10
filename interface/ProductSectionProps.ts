import { ProductCardProps } from "./ProductCardProps";

export interface ProductSectionProps {
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}
