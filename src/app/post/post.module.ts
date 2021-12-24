import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './feed/post/post.component';

@NgModule({
  declarations: [
    FeedComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
