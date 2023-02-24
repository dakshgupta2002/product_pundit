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
  id: string;
  location: string;
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
