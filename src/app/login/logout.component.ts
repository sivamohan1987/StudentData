import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    this.router.navigate(['']);
    window.location.reload();
  }

}
