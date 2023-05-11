export interface AllProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  categories: string;
  brand: string;
  inventory: {
    stock: number;
    availability: boolean;
  };
  images: string;
}

export interface MyPro {
  product: AllProducts[];
}
