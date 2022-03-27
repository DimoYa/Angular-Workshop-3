import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLogged(): boolean | null {
    return this.userService.isLoggedInUser;
  }

  getCurrentUserName: string | undefined 

  constructor(public userService: UserService) {
    this.getCurrentUserName = this.userService.getCurrentUser()?.username;
  }

  logout() {
    this.userService.logOut();
  }
}
