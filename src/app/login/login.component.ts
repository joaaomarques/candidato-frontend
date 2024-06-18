import { LoginRequest } from './../login-request';
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginResponse } from '../login-response';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginRequest:LoginRequest = new LoginRequest();
  usuario:Usuario=new Usuario();
  constructor(private loginService:LoginService, private route:Router, private usuarioService:UsuarioService, private alertService:AlertModalService){}

  onLogin(){

    this.loginService.login(this.loginRequest).subscribe((res:LoginResponse)=>{

      if(res.accessToken) {
        localStorage.setItem('token', res.accessToken)
        this.route.navigateByUrl('/candidatos')
      } else {
        this.alertService.showAlertSuccess("Erro ao logar")
      }
    })
  }

  createUsuario() {

    this.usuarioService.createUsuario(this.usuario).subscribe(data=>{
      console.log(data);
    })
  }
}
