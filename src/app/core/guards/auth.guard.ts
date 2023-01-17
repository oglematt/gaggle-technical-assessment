import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree} from '@angular/router';
import { LoginService } from "../services/login.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public loginService: LoginService,
    public router: Router
  ) {
  }

  canActivate(): boolean | UrlTree {
    return this.loginService.userLoggedIn() ||
      this.router.parseUrl('login');
  }

}
