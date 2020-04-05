import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): Observable<boolean>{
    return from(this.authService.isAuthenticated())
      .pipe(tap(isloggedIn => {
        if (isloggedIn !== true) {
          this.router.navigate(['/login']);
        }
      }))
  }
}
