import { Component } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-create-candidato',
  templateUrl: './create-candidato.component.html',
  styleUrl: './create-candidato.component.css'
})
export class CreateCandidatoComponent {

  candidato:Candidato=new Candidato();
  bsModalRef:BsModalRef= new BsModalRef();

  constructor(private candidatoService:CandidatoService, private route:Router, private alertModalService:AlertModalService) {

  }

  onSubmit(){
    this.createCandidato();
    console.log(this.candidato)
  }

  createCandidato(){

    this.candidatoService.createCandidato(this.candidato).subscribe(data=>{

      this.goToCandidatoList();
      this.successAlert();

    }, (error)=>{
      console.error(error);
      this.handleError();
    })
  }

  goToCandidatoList(){

    this.route.navigate(['/candidatos']);
  }

  handleError() {
    this.alertModalService.showAlertDanger("Erro ao cadastrar candidato");
  }

  successAlert() {
    this.alertModalService.showAlertSuccess("Candidato criado com sucesso!");
  }
}
