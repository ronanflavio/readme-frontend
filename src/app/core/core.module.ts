import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { GenericHeaderComponent } from './components/generic-header/generic-header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SnackComponent } from './components/snack/snack.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ElapsedTimePipe,
    SearchBarComponent,
    UserAvatarComponent,
    GenericHeaderComponent,
    LoadingComponent,
    SnackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ElapsedTimePipe,
    SearchBarComponent,
    UserAvatarComponent,
    GenericHeaderComponent,
    LoadingComponent
  ]
})
export class CoreModule { }
