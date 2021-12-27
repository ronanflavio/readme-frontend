import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostItemComponent } from './feed/post-item/post-item.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    FeedComponent,
    PostItemComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class PostModule { }
