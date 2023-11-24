import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  userId: number = 0;
  user: User = new User(0,'','','');

  constructor(private route: ActivatedRoute, private _userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.user = this._userService.getUser(this.userId) || new User(0,'','','');
    })
  }
}
