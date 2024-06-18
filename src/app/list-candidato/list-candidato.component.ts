import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Candidato } from '../candidato';
import { CandidatoService } from '../candidato.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-list-candidato',
  templateUrl: './list-candidato.component.html',
  styleUrl: './list-candidato.component.css'
})
export class ListCandidatoComponent {

  candidatos:Candidato[]=[];
  form: FormGroup;
  displayedColumns: string[] = ['nome', 'nascimento', 'sexo', 'nota', 'cidade', 'uf', 'acoes'];
  constructor(private candidatoService:CandidatoService, private route:Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [''],
      nascimento: [null],
      sexo: [''],
      nota: [''],
      sortBy: [''],
      direction: [''],
    });

  }

  ngOnInit():void {

    this.getCandidatos();
    console.log(this.candidatos);

  }


  getCandidatos() {
    const { nome, nascimento, sexo, nota, sortBy, direction } = this.form.value;
    const formattedDate = nascimento ? this.formatDate(nascimento) : null;
    debugger;
    this.candidatoService.findByFilters(nome, formattedDate, sexo, nota, sortBy, direction).subscribe(data=>{
      this.candidatos=data

    })

  }

  // filterCandidatos(nome?: string, nascimento?: Date | null, sexo?: string, nota?: number, sortBy?:string, direction?:string): void {

  //   const nascimentoDate = nascimento ?? undefined;

  //   this.candidatoService.findByFilters(nome, nascimentoDate, sexo, nota, sortBy, direction).subscribe(
  //     (data: Candidato[]) => {
  //       this.candidatos = data;
  //     })
  // }

  onSubmit(): void {
    this.getCandidatos();
  }

  viewCandidato(id:number) {
    this.route.navigate(['details-candidato', id]);
  }

  updateCandidato(id:number){

    this.route.navigate(['update-candidato', id]);

  }

  deleteCandidato(id:number){

    this.candidatoService.deleteCandidato(id).subscribe(data=>{
      console.log(data);
      this.getCandidatos();
    })
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
