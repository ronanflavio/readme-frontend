import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    CoreModule,
  ]
})
export class UsersModule { }
