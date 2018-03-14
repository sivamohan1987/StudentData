import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Student Information System';
  menuItems: MenuItem[];
  sidenavParams: any[];
  sidenavActions: EventEmitter<any>;

  constructor(private router: Router) {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];
    this.menuItems = [
          { name: 'Login', route: '/login' },
          { name: 'Students', route: '/students' }
      ];
    if (localStorage.getItem('userToken')) {
      this.menuItems.shift();
    }
  }

  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }
}

export interface MenuItem {
  name: string;
  route: string;
}