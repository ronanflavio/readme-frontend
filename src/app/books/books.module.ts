import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class BooksModule { }
