import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCandidatoComponent } from './list-candidato/list-candidato.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateCandidatoComponent } from './create-candidato/create-candidato.component';
import { FormsModule } from '@angular/forms';
import { UpdateCandidatoComponent } from './update-candidato/update-candidato.component';
import { DetailsCandidatoComponent } from './details-candidato/details-candidato.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './token.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ListCandidatoComponent,
    CreateCandidatoComponent,
    UpdateCandidatoComponent,
    DetailsCandidatoComponent,
      CreateUsuarioComponent,
      LoginComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    MatTableModule, MatFormFieldModule, MatButtonModule,MatInputModule,MatDatepickerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    SharedModule

  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    },
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
