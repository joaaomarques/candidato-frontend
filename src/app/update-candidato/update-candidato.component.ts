import { ChangeDetectorRef, Component } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from '../candidato';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-update-candidato',
  templateUrl: './update-candidato.component.html',
  styleUrl: './update-candidato.component.css'
})
export class UpdateCandidatoComponent {

id:number=0;
candidato:Candidato=new Candidato();

  constructor(private candidatoService:CandidatoService, private route:ActivatedRoute, private router:Router, private alertModalService:AlertModalService){

  }

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.candidatoService.getCandidatoById(this.id).subscribe(data=>{

      this.candidato=data;
    })
  }

  onSubmit(){

    this.candidatoService.updateCandidato(this.id,this.candidato).subscribe(data=>{
      this.candidato = data;
      this.alertModalService.showAlertSuccess("Candidato atualizado com sucesso!")
      this.goToCandidatoList();
    }, (error)=>{
      console.error(error);
      this.alertModalService.showAlertDanger("Erro ao atualizar candidato.")
    })
  }

   goToCandidatoList(){
     this.router.navigate(['/candidatos']);
   }

}
