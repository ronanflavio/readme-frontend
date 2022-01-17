import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchBookComponent } from './search-book/search-book.component';

const routes: Routes = [
  {
    path: ':id/details',
    component: BookDetailsComponent
  },
  {
    path: 'search',
    component: SearchBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
