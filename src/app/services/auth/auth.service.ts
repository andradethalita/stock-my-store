import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;

  login() {
    //Implementar a logica de autenticação
    this.isLoggedIn = true;
  }

  logout() {
        //Implementar a logica de logout
    this.isLoggedIn = false;
  }

  get isAuthenticated(): boolean{
    return this.isLoggedIn;
  }
}
