import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
// , FormGroup, FormControl, NgForm, Validators

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterializeModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class LoginModule { }
