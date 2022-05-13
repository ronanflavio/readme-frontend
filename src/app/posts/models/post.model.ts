export interface Post {
  id: string,
  tipoPostagem: string,
  descricao: string,
  usuario: PostUser,
  livros: PostBook[],
  dataPostagem: string,
  nota: number | null,
  truncate: boolean
}

export interface PostList {
  pagina: number,
  paginas: number,
  postagens: Post[];
}

export interface PostUser {
  id: string,
  urlFoto: string,
  nome: string,
  usuario: string,
}

export interface PostBook {
  id: string,
  fotoUrl: string,
  titulo: string,
  autor: string
}
