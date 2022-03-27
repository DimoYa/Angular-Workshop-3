import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ITheme from '../model/Theme';
import { environment } from '../../../environments/environment';
import IPost from '../model/Post';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getThemes(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${BASE_URL}/themes`);
  }

  getThemeById(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`${BASE_URL}/themes/${id}`);
  }

  createTheme(body: Object) : Observable<Object> {
    return this.http.post(`${BASE_URL}/themes`, body);
  }
}
