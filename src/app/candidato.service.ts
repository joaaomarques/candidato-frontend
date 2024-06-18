import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private baseURL="http://localhost:8080/api/v1/candidato";
  private listURL="/lista/filter"

  constructor(private httpClient:HttpClient) { }

  findByFilters(nome?: string, nascimento?: string | null, sexo?: string, nota?: number, sortBy?: string, direction?: string): Observable<Candidato[]> {
    let params = new HttpParams();
    if (nome) params = params.set('nome', nome);
    if (nascimento) params = params.set('nascimento', nascimento);
    if (sexo) params = params.set('sexo', sexo);
    if (nota) params = params.set('nota', nota.toString());
    if(sortBy) params = params.set('sortBy', sortBy);
    if(direction) params = params.set('direction', direction);


    return this.httpClient.get<Candidato[]>(`${this.baseURL+this.listURL}`, { params });
  }

  getCandidatoList():Observable<Candidato[]>{

    return this.httpClient.get<Candidato[]>(`${this.baseURL+this.listURL}`);


  }

  createCandidato(candidato:Candidato):Observable<object>{

    return this.httpClient.post(`${this.baseURL}`, candidato).pipe(
      catchError(this.handleError)
    );
  }

  getCandidatoById(id:number):Observable<Candidato>{

    return this.httpClient.get<Candidato>(`${this.baseURL}/${id}`);
  }

  updateCandidato(id:number, candidato:Candidato):Observable<Candidato>{

    return this.httpClient.put<Candidato>(`${this.baseURL}/${id}`,candidato);
  }

  deleteCandidato(id:number):Observable<Candidato>{

    return this.httpClient.delete<Candidato>(`${this.baseURL}/${id}`);
  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage =  '';
    if(error.status === 0) {
      console.error('Ocorreu um erro',error.error)
    } else {
      console.error(`API retornou código: ${error.status}, messagem:`, error.error);
      errorMessage=`API retornou código: ${error.status}, messagem:`, error.error;
    }
    errorMessage='Um erro inesperado aconteceu, tente novamente mais tarde.';
    return throwError(() => new Error('Um erro inesperado aconteceu, tente novamente mais tarde.'))
  }


}
