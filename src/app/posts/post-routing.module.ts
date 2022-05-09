import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostBooksComponent } from './create-post-books/create-post-books.component';
import { CreatePostMessageComponent } from './create-post-message/create-post-message.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'post/create/books',
    component: CreatePostBooksComponent
  },
  {
    path: 'post/create/message',
    component: CreatePostMessageComponent
  },
  {
    path: 'review/create/:bookId',
    component: CreateReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
