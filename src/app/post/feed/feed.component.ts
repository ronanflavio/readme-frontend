import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public postItems = [
    {
      user: {
        avatar: 'https://i.pravatar.cc/150?u=post01',
        name: 'Robin Hood'
      },
      books: [
        {
          image: 'https://picsum.photos/100/150?u=123123',
          title: 'Meu Livro Favorito',
          authors: [
            'Lars Urish',
            'Golden Hour'
          ]
        },
        {
          image: 'https://picsum.photos/100/150?u=234234',
          title: 'O Livro Odiado',
          authors: [
            'Rotua Odicehnocsed'
          ]
        },
        {
          image: 'https://picsum.photos/100/150?u=345345',
          title: 'Tente não ler o título deste livro',
          authors: [
            'Autor desconhecido'
          ]
        },
        {
          image: 'https://picsum.photos/100/150?u=456456',
          title: 'Role para o lado e verás',
          authors: [
            'Rolento Silva'
          ]
        },
        {
          image: 'https://picsum.photos/100/150?u=567567',
          title: 'Olhou pra um lado e tocou pro outro',
          authors: [
            'Ronaldo'
          ]
        }
      ],
      message: '<p>Suspendisse mollis erat eu dictum euismod. Quisque venenatis ante nisi, et faucibus mi consectetur ac. Proin quis felis sit amet nisi efficitur malesuada nec eu nisl. Nam sollicitudin odio ut bibendum aliquet.</p><p>Donec et consectetur nunc. Duis quis eros pretium. Vivamus vitae justo ullamcorper massa dapibus egestas. Aliquam vel eleifend lectus. Duis bibendum odio cursus sem rutrum viverra.</p>',
      truncate: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this._preparePosts();
  }

  private _preparePosts(): void {
    this.postItems.forEach(post => {
      post.truncate = post.message.length > 200;
    });
  }

}
