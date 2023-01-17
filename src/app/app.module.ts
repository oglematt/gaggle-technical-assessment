import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';
import { GaggleCheckboxComponent } from './shared/form-controls/gaggle-checkbox/gaggle-checkbox.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GaggleInputComponent } from './shared/form-controls/gaggle-input/gaggle-input.component';
import {SharedModule} from "./shared/shared.module";
import { RegistrationFormComponent } from './core/components/registration-form/registration-form.component';
import { ResetPasswordFormComponent } from './core/components/reset-password-form/reset-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    TopBarComponent,
    RegistrationFormComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
