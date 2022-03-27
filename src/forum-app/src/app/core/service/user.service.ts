import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import ILogin from '../model/Login';
import IUser from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  registeredUsers: IUser[] | null;
  loggedInUser: IUser | null;
  isLoggedInUser: boolean | null;

  constructor(private router: Router) {
    this.isLoggedInUser = JSON.parse(localStorage.getItem('isLogged') || 'false');
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  }

  register(user: IUser) {

    this.registeredUsers?.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));

    this.router.navigate(['/login']);
  }

  login(user: ILogin) {
    const currentUser = this.registeredUsers?.find((x) => x.email == user.email);
    currentUser!._id = '5fa64b162183ce1728ff371d';
    if (currentUser != undefined && currentUser.password == user.password) {
      this.isLoggedInUser = true;
      localStorage.setItem('isLogged', JSON.stringify(true));
      this.loggedInUser = currentUser;
      localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
      this.router.navigate(['/']);
    }
  }

  logOut() {
    this.isLoggedInUser = false;
    localStorage.setItem('isLogged', JSON.stringify(false));
    localStorage.removeItem('loggedInUser');
  }

  getCurrentUser() {
    return this.loggedInUser;
  }
}
