export interface BookDetails {
  id: string;
  title: string;
  image: string;
  authors: string[];
  synopsis: string;
  review: BookReview;
  interaction: BookInteraction;
}

export interface BookReview {
  rating: number;
  reviewers: number;
}

export interface BookInteraction {
  favorite: boolean;
  own: boolean;
  read: boolean;
  reading: boolean;
  willing: boolean;
}
