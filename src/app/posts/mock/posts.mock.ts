import { PostList } from "../models/post.model";

export const POST_LIST: PostList = {
  pagina: 1,
  paginas: 2,
  postagens: [
    {
      id: 'asy87sd8c9x000',
      usuario: {
        id: 'a65s4d9f8a322',
        urlFoto: 'https://i.pravatar.cc/150?u=post01',
        nome: 'Robin Hood',
        usuario: 'rhood.saver'
      },
      livros: [
        {
          id: 'a497879s8d7f8',
          fotoUrl: 'https://picsum.photos/id/100/100/150?u=123123',
          titulo: 'Meu Livro Favorito',
          autor: 'Lars Urish',
        },
        {
          id: '98ddaf79jblknkl',
          fotoUrl: 'https://picsum.photos/id/1004/100/150?u=234234',
          titulo: 'O Livro Odiado',
          autor: 'Rotua Odicehnocsed'
        },
        {
          id: 't456456445552',
          fotoUrl: 'https://picsum.photos/id/1006/100/150?u=345345',
          titulo: 'Tente não ler o título deste livro',
          autor: 'Autor desconhecido'
        },
        {
          id: 'jskhjxcv89792834',
          fotoUrl: 'https://picsum.photos/id/1010/100/150?u=456456',
          titulo: 'Role para o lado e verás',
          autor: 'Rolento Silva'
        },
        {
          id: '7xcvc78xvbyxcjvbn',
          fotoUrl: 'https://picsum.photos/id/1011/100/150?u=567567',
          titulo: 'Olhou pra um lado e tocou pro outro',
          autor: 'Ronaldo'
        }
      ],
      review: null,
      descricao: '<p>Suspendisse mollis erat eu dictum euismod. Quisque venenatis ante nisi, et faucibus mi consectetur ac. Proin quis felis sit amet nisi efficitur malesuada nec eu nisl. Nam sollicitudin odio ut bibendum aliquet.</p><p>Donec et consectetur nunc. Duis quis eros pretium. Vivamus vitae justo ullamcorper massa dapibus egestas. Aliquam vel eleifend lectus. Duis bibendum odio cursus sem rutrum viverra.</p>',
      dataPostagem: '2021-12-26 14:05:09',
      tipoPostagem: 'PUBLICACAO',
      truncate: false
    },

    {
      id: '9879d7sgd798anlalk',
      usuario: {
        id: 'fjskdf89sdy7sdjk',
        urlFoto: 'https://i.pravatar.cc/150?u=post02',
        nome: 'Alexandre o Grande',
        usuario: 'alexbig.the'
      },
      livros: [
        {
          id: 'sf867d87f8sdmk',
          fotoUrl: 'https://picsum.photos/id/1025/100/150?u=321321',
          titulo: 'Meu Livro Favorito',
          autor: 'Lars Urish',
        },
        {
          id: 'fs7d67sanksklal',
          fotoUrl: 'https://picsum.photos/id/1031/100/150?u=432432',
          titulo: 'O Livro Odiado',
          autor: 'Rotua Odicehnocsed'
        }
      ],
      review: null,
      descricao: '<p>Suspendisse mollis erat eu dictum euismod. Quisque venenatis ante nisi, et faucibus mi consectetur ac.</p>',
      dataPostagem: '2021-12-26 11:19:12',
      tipoPostagem: 'PUBLICACAO',
      truncate: false
    },

    {
      id: 'sfd7s6d786778sdfas',
      usuario: {
        id: '798a7sd9f6a78s',
        urlFoto: 'https://i.pravatar.cc/150?u=post03',
        nome: 'Valentina Dias',
        usuario: 'valentinas2'
      },
      livros: [
        {
          id: 'sf867d87f8sdmk',
          fotoUrl: 'https://picsum.photos/id/1033/100/150?u=asdasd',
          titulo: 'Meu Livro Favorito',
          autor: 'Lars Urish',
        }
      ],
      review: 4,
      descricao: '<p>Sed eget imperdiet arcu, cursus vulputate tellus. Cras elit massa, iaculis in vulputate vel, sodales id ligula. Pellentesque quis vehicula magna. Nullam eu mauris nisl. Aliquam consectetur vestibulum ante.</p><p>Integer tristique eros et lacus gravida iaculis. Nulla lacinia, leo id tincidunt convallis, diam odio tempus lacus, eget sodales orci magna sed massa. Nulla facilisi. Suspendisse fringilla ac quam vel dictum. Nulla mattis, tortor viverra cursus tempor, mi lorem condimentum leo</p>',
      dataPostagem: '2021-10-25 11:36:52',
      tipoPostagem: 'RESENHA',
      truncate: false
    }
  ]
};
