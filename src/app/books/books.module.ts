import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { BookRatingComponent } from './book-details/book-rating/book-rating.component';
import { BookCoverComponent } from './book-details/book-cover/book-cover.component';
import { BookActionsComponent } from './book-details/book-actions/book-actions.component';

@NgModule({
  declarations: [
    BookDetailsComponent,
    BookRatingComponent,
    BookCoverComponent,
    BookActionsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class BooksModule { }
