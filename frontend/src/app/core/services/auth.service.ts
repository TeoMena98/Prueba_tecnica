import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ApiResponse,
  AuthResponse,
} from '../interfaces/apì-response.interface';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  login(mail: string) {
    this.http
      .post<ApiResponse<AuthResponse>>(environment.API_URL + '/auth/login', {
        mail,
      })
      .subscribe(
        (resp) => {
          localStorage.setItem('token', resp.data.token);
          this.router.navigate(['/']);
        },
        (err) => {
          alert('Something went wrong login.');
        }
      );
  }
}
