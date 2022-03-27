import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import IUser from '../model/User';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedInUser: IUser | null;

  get isLoggedInUser() {
    return JSON.parse(
      localStorage.getItem('isLogged') || 'false'
    );
  }

  constructor(private router: Router, private http: HttpClient) {
    this.loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser') || '{}'
    );
  }

  register$(user: { username: string, email: string, password: string, tel?: string }) {
    return this.http.post<IUser>(`${environment.apiUrl}/register`, user, { withCredentials: true })
  }

  login$(user: { email: string, password: string }) : Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiUrl}/login`, user, {
      withCredentials: true,
    });
  }

  logOut() {
    localStorage.setItem('isLogged', JSON.stringify(false));
    localStorage.removeItem('loggedInUser');
  }

  getCurrentUser() {
    return this.loggedInUser;
  }
}
