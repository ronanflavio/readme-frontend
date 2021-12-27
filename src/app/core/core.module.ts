import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { CreatePostButtonComponent } from './components/create-post-button/create-post-button.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CreatePostButtonComponent,
    SideMenuComponent,
    ElapsedTimePipe,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CreatePostButtonComponent,
    SideMenuComponent,
    ElapsedTimePipe,
    SearchBarComponent
  ]
})
export class CoreModule { }
