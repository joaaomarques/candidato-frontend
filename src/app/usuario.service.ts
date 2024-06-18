import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL="http://localhost:8080/usuario";

constructor(private httpClient:HttpClient) { }

createUsuario(usuario:Usuario):Observable<object>{

  return this.httpClient.post(`${this.baseURL}`, usuario);

}

}
