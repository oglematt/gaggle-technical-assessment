import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private validUser: User = {
    username: 'mogle',
    password: 'hopeThisWorks!'
  };

  constructor() { }

  userLoggedIn(): boolean {
    const currentUserJson: string | null = localStorage.getItem('currentuser');
    if (currentUserJson) {
      const currentUserObj: User = JSON.parse(currentUserJson);
      if (currentUserObj.username === this.validUser.username
        && currentUserObj.password === this.validUser.password) {
        return true;
      } else {
        console.log('not a valid user');
        localStorage.removeItem('currentUser');
        return false;
      }
    } else {
      return false;
    }
  }

  loginUser(formData: User): boolean {
    if (formData.username === this.validUser.username
        && formData.password === this.validUser.password) {
      localStorage.setItem('currentUser', JSON.stringify(formData));
      return true;
    } else {
      return false;
    }
  }

  logoutUser(): boolean {
    localStorage.removeItem('currentUser');
    return true;
  }
}
