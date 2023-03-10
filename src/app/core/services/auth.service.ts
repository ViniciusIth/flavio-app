import { UserAuth } from './../interfaces/user-auth.schema';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = environment.apiUrl + 'auth/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(this.authUrl, {
      email,
      password,
    });
  }

  register(name: string, email: string, password: string) {
    return this.http.post(this.authUrl + 'register', {
      name,
      email,
      password,
    });
  }

  isLoggedIn(): boolean {
    const access_token = this.getAuthData()?.access_token

    return access_token !== undefined && access_token.length > 0;

  }

  saveAuthData(authData: UserAuth) {
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  getAuthData(): UserAuth | null {
    const authData = localStorage.getItem('auth');

    if (authData) {
      return JSON.parse(authData);
    }
    return null;
  }
}
