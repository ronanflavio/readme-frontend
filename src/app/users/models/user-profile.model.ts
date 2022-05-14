import { Post } from "src/app/posts/models/post.model";

export interface UserProfile {
  id: string;
  nome: string;
  urlFoto: string;
  usuario: string;
  bio: string;
  seguidores: number;
  seguindo: number;
  estouSeguindo: boolean;
  posts: Post[];
}
