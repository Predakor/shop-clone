interface Promotion {
  name: string;
  message: string;
  product: string;
}

export interface Product {
  id: string;
  name: string;
  about: string;
  price: number;
  category: string;
  promotions?: Promotion[];
}
