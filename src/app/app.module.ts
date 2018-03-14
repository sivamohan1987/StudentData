import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { StudentsModule } from './students/students.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginModule
  },
  {
    path: 'students',
    component: StudentsModule
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    LoginModule,
    HttpModule,
    HttpClientModule,
    StudentsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
