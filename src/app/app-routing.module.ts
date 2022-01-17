import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./posts/post-routing.module').then(m => m.PostRoutingModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books-routing.module').then(m => m.BooksRoutingModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users-routing.module').then(m => m.UsersRoutingModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
