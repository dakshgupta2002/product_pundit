export interface ReviewsI {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  collectionId: string;
  collectionName: string;
  created: Date;
  downvotes: number;
  expand: ItemExpand;
  id: string;
  location: string;
  product_id: string;
  rating: string;
  review_date: Date;
  sentiment: string;
  source: string;
  summary: string;
  text: string;
  updated: Date;
  upvotes: number;
  username: string;
}

export interface ItemExpand {
  product_id: Product;
}

export interface Product {
  collectionId: string;
  collectionName: string;
  created: Date;
  currency: string;
  id: string;
  name: string;
  negative_count: number;
  neutral_count: number;
  picture: string;
  positive_count: number;
  price: number;
  product_id: string;
  updated: Date;
  expand: ProductIDExpand;
}

export interface ProductIDExpand {}

export interface Products {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  collectionId: string;
  collectionName: string;
  created: Date;
  currency: string;
  id: string;
  name: string;
  negative_count: number;
  neutral_count: number;
  picture: string;
  positive_count: number;
  price: number;
  updated: Date;
}
