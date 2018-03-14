import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  users: Array<{id: number, name: string, username: string, password: string, profession: string}>;

  constructor(private _userService: UserService) {
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

  ngOnInit() {
  }

  deleteUser(userId: number) {
    this._userService.deleteUser(userId)
        .subscribe(
          data => {
            
          },
          error => {
            'No users found';
          }
        );
  }

}
