import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCandidatoComponent } from './list-candidato/list-candidato.component';
import { CreateCandidatoComponent } from './create-candidato/create-candidato.component';
import { UpdateCandidatoComponent } from './update-candidato/update-candidato.component';
import { DetailsCandidatoComponent } from './details-candidato/details-candidato.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'candidatos', component:ListCandidatoComponent},
  {path:'create-candidato',component:CreateCandidatoComponent},
  {path:'update-candidato/:id',component:UpdateCandidatoComponent},
  {path:'details-candidato/:id',component:DetailsCandidatoComponent},
  {path:'create-usuario',component:CreateUsuarioComponent},
  {path:'login',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
