import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { POST_LIST } from '../mock/posts.mock';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public getFeed(): Observable<Post[]> {
    return of(POST_LIST).pipe(delay(1000));
  }
}
