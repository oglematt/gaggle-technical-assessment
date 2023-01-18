import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private userSubject!: BehaviorSubject<User | null>;
  public user!: Observable<User | null>;

  private validUser: User = {
    username: 'gaggle',
    password: 'HowNeatIsThat?'
  };

  constructor(
    private router: Router
  ) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.userSubject = new BehaviorSubject<User | null>(JSON.parse(storedUser));
      this.user = this.userSubject.asObservable();
    } else {
      this.userSubject = new BehaviorSubject<User | null>(null);
    }
  }

  public get userValue(): User | null {
    if (this.userSubject) {
      return this.userSubject.value;
    } else {
      return null;
    }
  }

  login(formData: User): boolean {
    if (formData.username === this.validUser.username
        && formData.password === this.validUser.password) {
      localStorage.setItem('currentUser', JSON.stringify(formData));
      this.userSubject.next(<User>formData);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/login']);
  }
}
