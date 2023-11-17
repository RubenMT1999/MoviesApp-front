import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from '../interfaces/register-form';
import { environment } from 'src/environment/environment';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  registerUser(formData: RegisterForm): Observable<any> {
    return this.http.post(`${base_url}/auth/signup`, formData)
      .pipe(
        map((resp: any) => {
          localStorage.setItem('token', resp.token);
          return resp; // Devuelve la respuesta para que puedas acceder a ella al suscribirte
        })
      );
  }


  loginUser(formData: LoginForm){
    return this.http.post(`${base_url}/auth/signin`,formData)
      .pipe(
        map((resp: any) => {
          localStorage.setItem('token', resp.jwtToken);
          return resp; // Devuelve la respuesta para que puedas acceder a ella al suscribirte
        })
      );
  }

}
