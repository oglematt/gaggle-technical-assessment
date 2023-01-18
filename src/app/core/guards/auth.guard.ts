import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree} from '@angular/router';
import { LoginService } from "../services/login.service";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public loginService: LoginService,
    public router: Router
  ) {
  }

  canActivate(): boolean {
    if (this.loginService.userValue) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
