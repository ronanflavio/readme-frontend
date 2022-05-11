export interface UserProfile {
  id: string;
  nome: string;
  urlFoto: string;
  usuario: string;
  bio: string;
  seguidores: number;
  seguindo: number;
  imFollowing: boolean;
  posts: UserPostPagination;
}

interface UserPostPagination {
  page: number;
  pageCount: number;
  itemsCount: number;
  hasNext: boolean;
  hasBefore: boolean;
  items: UserPost[];
}

interface UserPost {
  id: string,
  books: UserPostBook[],
  message: string,
  datetime: string,
  review: number | null,
  truncate: boolean
}

interface UserPostBook {
  id: string,
  image: string,
  title: string,
  authors: string[]
}
