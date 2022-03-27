import { Component, OnInit } from '@angular/core';
import ILogin from '../../core/model/Login';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(data: ILogin) {
    this.userService.login(data);
  }

}
