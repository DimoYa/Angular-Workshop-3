import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  get isLogged(): boolean | null {
    return this.userService.isLoggedInUser;
  }

  constructor(public userService: UserService) { }

}
