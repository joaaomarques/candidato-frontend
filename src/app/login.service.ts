import { LoginRequest } from './login-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = "http://localhost:8080/login";

  constructor(private httpClient:HttpClient) { }

  login(loginRequest:LoginRequest):Observable<LoginResponse>{

    return this.httpClient.post<LoginResponse>(`${this.loginURL}`,loginRequest);
  }
}
