import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostItemComponent } from './feed/post-item/post-item.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FeedComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule
  ]
})
export class PostModule { }
