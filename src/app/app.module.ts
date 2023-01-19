import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { RegistrationFormComponent } from './core/components/registration-form/registration-form.component';
import { ResetPasswordFormComponent } from './core/components/reset-password-form/reset-password-form.component';
import {FormControlPipe} from "./shared/pipes/form-control.pipe";
import { ApplicationMenuComponent } from './core/components/application-menu/application-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    TopBarComponent,
    RegistrationFormComponent,
    ResetPasswordFormComponent,
    ApplicationMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ FormControlPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
