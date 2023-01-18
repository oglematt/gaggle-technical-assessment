import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { LoginService } from "../../services/login.service";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from "../../interfaces/user";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";
import {Router} from "@angular/router";
import {RegistrationFormComponent} from "../../components/registration-form/registration-form.component";
import {ResetPasswordFormComponent} from "../../components/reset-password-form/reset-password-form.component";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})

export class AuthLayoutComponent implements OnInit, AfterViewInit {

  public loginForm!: FormGroup;
  public loginError: string = '';

  @ViewChild(RegistrationFormComponent) registrationForm!: RegistrationFormComponent;
  @ViewChild(ResetPasswordFormComponent) resetPasswordForm!: ResetPasswordFormComponent;

  @ViewChild('username') usernameField!: GaggleInputComponent;
  @ViewChild('password') passwordField!: GaggleInputComponent;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (this.loginService.userValue) {
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['/']);
    }

    const rememberUserStore = localStorage.getItem('rememberUser');

    this.loginForm = this.formBuilder.group({
      username: [ rememberUserStore ? rememberUserStore : '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ],
      rememberUser: [ !!rememberUserStore ]
    });
  }

  ngAfterViewInit() {
    this.setFocus();
  }

  setFocus(): void {
    // Setting focus sucks, and I've never been able to find a reliable
    // way to avoid the dreaded ExpressionChangedAfterItHasBeenCheckedError
    // without using a simple 100ms timeout.
    setTimeout(() => {
      if (this.loginForm.get('username')?.value) {
        this.passwordField.inputElement.nativeElement.focus();
      } else {
        this.usernameField.inputElement.nativeElement.focus();
      }
    }, 100);
  }

  loginUser(): void {
    const formValues: User = this.loginForm.value;

    if (formValues.rememberUser) {
      localStorage.setItem('rememberUser', formValues.username);
    } else {
      localStorage.removeItem('rememberUser');
    }

    if (this.loginService.login(formValues)) {
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['/']);
    } else {
      this.loginError = 'Username or password incorrect';
      this.loginForm.get('password')?.reset();
      this.setFocus();
    }

  }

  showRegistrationForm(): void {
    this.registrationForm.open();
  }

  showResetPasswordForm(): void {
    this.resetPasswordForm.open();
  }

}
