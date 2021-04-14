import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oktaAuth: OktaAuthService) { }

  isAuthenticated() : Observable<boolean> {
    return from(this.oktaAuth.isAuthenticated())
  }

  login() {    
    this.oktaAuth.signInWithRedirect({
      originalUri: '/home'
    });
  }

  logout() {    
    this.oktaAuth.signOut({
      originalUri: '/'
    })
  }
}
