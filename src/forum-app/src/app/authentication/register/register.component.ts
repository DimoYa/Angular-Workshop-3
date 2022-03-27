import { Component, OnInit } from '@angular/core';
import IUser from '../../core/model/User';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
    register(data: IUser) {
      this.userService.register(data);
    }
}
