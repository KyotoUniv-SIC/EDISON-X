import { SessionService } from '../models/session.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EnterGuard implements CanActivate {
  constructor(private session: SessionService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.session.checkLoginState().pipe(
      map((session) => {
        if (session.login) {
          this.router.navigate(['/dashboard']);
        }
        return !session.login;
      }),
    );
  }
}
