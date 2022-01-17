export interface Post {
  id: string,
  user: PostUser,
  books: PostBook[],
  message: string,
  datetime: string,
  review: number | null,
  truncate: boolean
}

interface PostUser {
  id: string,
  avatar: string,
  name: string,
  username: string,
}

interface PostBook {
  id: string,
  image: string,
  title: string,
  authors: string[]
}