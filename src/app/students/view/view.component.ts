import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  user: any;
  constructor(private _userService: UserService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._userService.getUser(id)
        .subscribe(
          data => {
            this.user = data;
          },
          error => {
            'No user found';
          }
        );
  }

}
