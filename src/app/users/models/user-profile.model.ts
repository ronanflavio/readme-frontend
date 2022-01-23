export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  username: string;
  genres: string[];
  location: string;
  followers: number;
  following: number;
  joinDate: string;
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
