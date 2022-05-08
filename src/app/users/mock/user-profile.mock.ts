import { UserProfile } from "../models/user-profile.model";

export const USER_PROFILE: UserProfile = {
  id: 'asfas776786a87sf',
  name: 'Juscelino Kubitschek',
  username: 'juscelinok',
  avatar: 'https://i.pravatar.cc/50?u=profilepic',
  genres: [
    'Ficcção científica',
    'Terror',
    'Romance'
  ],
  location: 'Belo Horizonte - MG',
  followers: 183,
  following: 214,
  imFollowing: false,
  joinDate: '2019-07-07 11:25:16',
  posts: {
    page: 1,
    pageCount: 1,
    itemsCount: 3,
    hasNext: false,
    hasBefore: false,
    items: [
      {
        id: 'asy87sd8c9x000',
        books: [
          {
            id: 'a497879s8d7f8',
            image: 'https://picsum.photos/id/100/100/150?u=123123',
            title: 'Meu Livro Favorito',
            authors: [
              'Lars Urish',
              'Golden Hour'
            ]
          },
          {
            id: '98ddaf79jblknkl',
            image: 'https://picsum.photos/id/1004/100/150?u=234234',
            title: 'O Livro Odiado',
            authors: [
              'Rotua Odicehnocsed'
            ]
          },
          {
            id: 't456456445552',
            image: 'https://picsum.photos/id/1006/100/150?u=345345',
            title: 'Tente não ler o título deste livro',
            authors: [
              'Autor desconhecido'
            ]
          },
          {
            id: 'jskhjxcv89792834',
            image: 'https://picsum.photos/id/1010/100/150?u=456456',
            title: 'Role para o lado e verás',
            authors: [
              'Rolento Silva'
            ]
          },
          {
            id: '7xcvc78xvbyxcjvbn',
            image: 'https://picsum.photos/id/1011/100/150?u=567567',
            title: 'Olhou pra um lado e tocou pro outro',
            authors: [
              'Ronaldo'
            ]
          }
        ],
        review: null,
        message: '<p>Suspendisse mollis erat eu dictum euismod. Quisque venenatis ante nisi, et faucibus mi consectetur ac. Proin quis felis sit amet nisi efficitur malesuada nec eu nisl. Nam sollicitudin odio ut bibendum aliquet.</p><p>Donec et consectetur nunc. Duis quis eros pretium. Vivamus vitae justo ullamcorper massa dapibus egestas. Aliquam vel eleifend lectus. Duis bibendum odio cursus sem rutrum viverra.</p>',
        datetime: '2021-12-26 14:05:09',
        truncate: false
      },

      {
        id: '9879d7sgd798anlalk',
        books: [
          {
            id: 'sf867d87f8sdmk',
            image: 'https://picsum.photos/id/1025/100/150?u=321321',
            title: 'Meu Livro Favorito',
            authors: [
              'Lars Urish',
              'Golden Hour'
            ]
          },
          {
            id: 'fs7d67sanksklal',
            image: 'https://picsum.photos/id/1031/100/150?u=432432',
            title: 'O Livro Odiado',
            authors: [
              'Rotua Odicehnocsed'
            ]
          }
        ],
        review: null,
        message: '<p>Suspendisse mollis erat eu dictum euismod. Quisque venenatis ante nisi, et faucibus mi consectetur ac.</p>',
        datetime: '2021-12-26 11:19:12',
        truncate: false
      },

      {
        id: 'sfd7s6d786778sdfas',
        books: [
          {
            id: 'sf867d87f8sdmk',
            image: 'https://picsum.photos/id/1033/100/150?u=asdasd',
            title: 'Meu Livro Favorito',
            authors: [
              'Lars Urish',
              'Golden Hour'
            ]
          }
        ],
        review: 4,
        message: '<p>Sed eget imperdiet arcu, cursus vulputate tellus. Cras elit massa, iaculis in vulputate vel, sodales id ligula. Pellentesque quis vehicula magna. Nullam eu mauris nisl. Aliquam consectetur vestibulum ante.</p><p>Integer tristique eros et lacus gravida iaculis. Nulla lacinia, leo id tincidunt convallis, diam odio tempus lacus, eget sodales orci magna sed massa. Nulla facilisi. Suspendisse fringilla ac quam vel dictum. Nulla mattis, tortor viverra cursus tempor, mi lorem condimentum leo</p>',
        datetime: '2021-10-25 11:36:52',
        truncate: false
      }
    ]
  }
};
