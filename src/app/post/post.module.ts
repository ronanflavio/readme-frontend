import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostItemComponent } from './feed/post-item/post-item.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { CreatePostBooksComponent } from './create-post-books/create-post-books.component';
import { SelectedBooksComponent } from './create-post-books/selected-books/selected-books.component';
import { CreatePostMessageComponent } from './create-post-message/create-post-message.component';
import { CreatePostHeaderComponent } from './components/create-post-header/create-post-header.component';
import { CreatePostButtonComponent } from './components/create-post-button/create-post-button.component';

@NgModule({
  declarations: [
    FeedComponent,
    PostItemComponent,
    CreatePostBooksComponent,
    SelectedBooksComponent,
    CreatePostMessageComponent,
    CreatePostHeaderComponent,
    CreatePostButtonComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class PostModule { }
