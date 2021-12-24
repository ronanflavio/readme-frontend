import { Post } from "../models/post.model";

export const POST_LIST: Post[] = [
  {
    id: 'asy87sd8c9x000',
    user: {
      id: 'a65s4d9f8a322',
      avatar: 'https://i.pravatar.cc/150?u=post01',
      name: 'Robin Hood',
      username: 'rhood.saver'
    },
    books: [
      {
        id: 'a497879s8d7f8',
        image: 'https://picsum.photos/100/150?u=123123',
        title: 'Meu Livro Favorito',
        authors: [
          'Lars Urish',
          'Golden Hour'
        ]
      },
      {
        id: '98ddaf79jblknkl',
        image: 'https://picsum.photos/100/150?u=234234',
        title: 'O Livro Odiado',
        authors: [
          'Rotua Odicehnocsed'
        ]
      },
      {
        id: 't456456445552',
        image: 'https://picsum.photos/100/150?u=345345',
        title: 'Tente não ler o título deste livro',
        authors: [
          'Autor desconhecido'
        ]
      },
      {
        id: 'jskhjxcv89792834',
        image: 'https://picsum.photos/100/150?u=456456',
        title: 'Role para o lado e verás',
        authors: [
          'Rolento Silva'
        ]
      },
      {
        id: '7xcvc78xvbyxcjvbn',
        image: 'https://picsum.photos/100/150?u=567567',
        title: 'Olhou pra um lado e tocou pro outro',
        authors: [
          'Ronaldo'
        ]
      }
    ],
    message: '<p>Suspendisse mollis erat eu dictum euismod. Quisque venenatis ante nisi, et faucibus mi consectetur ac. Proin quis felis sit amet nisi efficitur malesuada nec eu nisl. Nam sollicitudin odio ut bibendum aliquet.</p><p>Donec et consectetur nunc. Duis quis eros pretium. Vivamus vitae justo ullamcorper massa dapibus egestas. Aliquam vel eleifend lectus. Duis bibendum odio cursus sem rutrum viverra.</p>',
    truncate: false
  },

  {
    id: '9879d7sgd798anlalk',
    user: {
      id: 'fjskdf89sdy7sdjk',
      avatar: 'https://i.pravatar.cc/150?u=post02',
      name: 'Alexandre o Grande',
      username: 'alexbig.the'
    },
    books: [
      {
        id: 'sf867d87f8sdmk',
        image: 'https://picsum.photos/100/150?u=321321',
        title: 'Meu Livro Favorito',
        authors: [
          'Lars Urish',
          'Golden Hour'
        ]
      },
      {
        id: 'fs7d67sanksklal',
        image: 'https://picsum.photos/100/150?u=432432',
        title: 'O Livro Odiado',
        authors: [
          'Rotua Odicehnocsed'
        ]
      }
    ],
    message: '<p>Suspendisse mollis erat eu dictum euismod. Quisque venenatis ante nisi, et faucibus mi consectetur ac.</p>',
    truncate: false
  }
];
