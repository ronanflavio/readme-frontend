export interface BookDetails {
  id: string;
  title: string;
  image: string;
  authors: string[];
  synopsis: string;
  rating: BookRating;
  interaction: BookInteraction;
  reviews?: BookReview[];
}

export interface BookRating {
  value: number;
  quantity: number;
}

export interface BookInteraction {
  favorite: boolean;
  own: boolean;
  read: boolean;
  reading: boolean;
  willing: boolean;
}

export interface BookReview {
  id: string;
  title: string;
  message: string;
  rating: number;
  datetime: string;
  truncate: boolean;
  user: UserReview;
}

export interface UserReview {
  id: string;
  avatar: string;
  name: string;
  username: string;
}
