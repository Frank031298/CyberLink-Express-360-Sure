export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}