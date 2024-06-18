import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent{

  usuario:Usuario=new Usuario();
  constructor(private usuarioService:UsuarioService, private route:Router) { }

  onSubmit() {
    this.createUsuario();
    console.log(this.usuario)
  }

  createUsuario() {

    this.usuarioService.createUsuario(this.usuario).subscribe(data=>{
      console.log(data);
    })
  }

}
