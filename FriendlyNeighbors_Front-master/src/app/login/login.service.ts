import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl + 'neighborhoods';

  constructor(private http: HttpClient) {}

  // TODO: get all logins
  // TODO: get login by username, by id sucks

  addLogin( login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/logins/`, login);
  }

  getLoginById(id: number): Observable<Login> {
    return this.http.get<Login>(`${this.apiUrl}/logins/${id}`);
  }

  getLoginByUsername(username: String): Observable<Login> {
    return this.http.get<Login>(`${this.apiUrl}/logins/_${username}`);
  }
}
