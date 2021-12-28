import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-message',
  templateUrl: './create-post-message.component.html',
  styleUrls: ['./create-post-message.component.scss']
})
export class CreatePostMessageComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public back(): void {
    this._router.navigate(['/post/create/books']);
  }

  public finish(): void {
    //
  }

}
