import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let cookie = this.cookieService.check('token_access');
    if (cookie) {
      this.redirect(cookie);
      return cookie;
    } else {
      return false;
    }
    return false;
  }
}
