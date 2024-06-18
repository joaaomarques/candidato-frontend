import { routes } from './app-routing.module';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Candidato App';

  constructor(private route:Router) {

  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.clear()
    this.route.navigateByUrl('/login')
  }

  isLoggedIn() {
    if(localStorage.getItem('token')) {
      return true;
    }

    return false;
  }

}
