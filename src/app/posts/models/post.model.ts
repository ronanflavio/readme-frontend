export interface Post {
  id: string,
  tipoPostagem: string,
  descricao: string,
  usuario: PostUser,
  livros: PostBook[],
  dataPostagem: string,
  review: number | null,
  truncate: boolean
}

export interface PostList {
  pagina: number,
  paginas: number,
  postagens: Post[];
}

interface PostUser {
  id: string,
  urlFoto: string,
  nome: string,
  usuario: string,
}

interface PostBook {
  id: string,
  imagem: string,
  titulo: string,
  autor: string
}
