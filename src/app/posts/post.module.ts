import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './feed/post/post.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { CreatePostBooksComponent } from './create-post-books/create-post-books.component';
import { SelectedBooksComponent } from './create-post-books/selected-books/selected-books.component';
import { CreatePostMessageComponent } from './create-post-message/create-post-message.component';
import { CreatePostButtonComponent } from './components/create-post-button/create-post-button.component';
import { CheckmarkComponent } from './components/checkmark/checkmark.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    FeedComponent,
    PostComponent,
    CreatePostBooksComponent,
    SelectedBooksComponent,
    CreatePostMessageComponent,
    CreatePostButtonComponent,
    CheckmarkComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    CoreModule,
    InfiniteScrollModule
  ]
})
export class PostModule { }
