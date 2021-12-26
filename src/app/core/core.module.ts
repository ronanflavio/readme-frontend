import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { CreatePostButtonComponent } from './create-post-button/create-post-button.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CreatePostButtonComponent,
    SideMenuComponent,
    ElapsedTimePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CreatePostButtonComponent,
    SideMenuComponent,
    ElapsedTimePipe
  ]
})
export class CoreModule { }
