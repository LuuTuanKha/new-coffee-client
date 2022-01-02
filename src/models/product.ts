export interface Product {
  name: string;
  description: string;
  images?: [string];
  price?: number;
  category?: string;
  isFeatured?: boolean;
  dateCreated?: string;
}
