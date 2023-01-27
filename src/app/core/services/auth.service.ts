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
}
