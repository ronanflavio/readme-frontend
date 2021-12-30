import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-books',
  templateUrl: './create-post-books.component.html',
  styleUrls: ['./create-post-books.component.scss']
})
export class CreatePostBooksComponent implements OnInit {

  public inputFocused: boolean = false;
  public selectedBooks: any = [
    {
      'id': 'as7df6as78da',
      'image': 'https://picsum.photos/id/142/50/75',
      'title': 'Long live the king',
      'authors': [
        'Narnia'
      ]
    },
    {
      'id': 'asdf7628734j',
      'image': 'https://picsum.photos/id/155/50/75',
      'title': 'Nightfal in the Middle Earth',
      'authors': [
        'Blind Guardian'
      ]
    }
  ];

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onInputFocused(event: boolean): void {
    this.inputFocused = event;
  }

  public close(): void {
    this._router.navigate(['/']);
  }

  public goToMessage(): void {
    this._router.navigate(['/post/create/message']);
  }

}
