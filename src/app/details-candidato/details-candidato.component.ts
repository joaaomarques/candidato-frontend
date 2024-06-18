import { Candidato } from './../candidato';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatoService } from '../candidato.service';

@Component({
  selector: 'app-details-candidato',
  templateUrl: './details-candidato.component.html',
  styleUrl: './details-candidato.component.css'
})
export class DetailsCandidatoComponent {

  id:number=0;
  candidato:Candidato=new Candidato();

  constructor(private candidatoService:CandidatoService, private route:ActivatedRoute){}

  ngOnInit():void {

    this.id=this.route.snapshot.params['id'];

    this.candidatoService.getCandidatoById(this.id).subscribe(data=>{

      this.candidato=data;
    })
  }
}
