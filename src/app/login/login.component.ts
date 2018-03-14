import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from './login.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response: any;
  @ViewChild('loginForm') form: any;
  login: Login = {
    username: '',
    password: ''
  };

  constructor(private _userService: UserService, private router: Router) {
  }

  ngOnInit() { }

  onSubmit() {
    this.form.error = '';
    if (this.form.valid) {
      this._userService.validateUser(this.login.username, this.login.password)
        .subscribe(
          data => {
            console.log(data);
            this.form.reset();
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userId', data.id);
            localStorage.setItem('userName', data.name);
            localStorage.setItem('userCredential', data.username);
            this.router.navigate(['students']);
          },
          error => {
            this.form.error = 'Invalid username or password';
          }
        );
    }
  }
}