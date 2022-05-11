export interface BookDetails {
  id: string;
  titulo: string;
  fotoUrl: string;
  autor: string;
  sinopse: string;
  avaliacao: number;
  quantidadeAvaliacao: number;
  interaction: BookInteraction;
  reviews?: BookReview[];
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
