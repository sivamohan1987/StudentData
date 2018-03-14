import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  users: Array<any>;

  constructor(private _userService: UserService, private _router: Router) {
    if (!localStorage.getItem('userToken')) {
      this._router.navigate(['login']);
    }
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this._userService.getUsers()
        .subscribe(
          data => {
            let tempData = Object.keys(data);
            let tempUsers = [];
            for (let user of tempData) {
              tempUsers.push(data[user]);
            }
            this.users = tempUsers;
          },
          error => {
            'No users found';
          }
        );
  }

  deleteUser(userId: number) {
    this._userService.deleteUser(userId)
        .subscribe(
          data => {
            window.location.reload();
          }
        );
  }

}
