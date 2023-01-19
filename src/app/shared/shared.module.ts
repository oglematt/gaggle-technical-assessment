import { NgModule } from "@angular/core";
import { GaggleCheckboxComponent } from "./form-controls/gaggle-checkbox/gaggle-checkbox.component";
import { GaggleInputComponent } from "./form-controls/gaggle-input/gaggle-input.component";
import { FormControlPipe } from './pipes/form-control.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { GaggleOverlayComponent } from './components/gaggle-overlay/gaggle-overlay.component';
import {CommonModule} from "@angular/common";
import { GaggleIconMenuButton } from './components/gaggle-icon-menu-button/gaggle-icon-menu-button.component';

@NgModule({
  declarations: [
    GaggleCheckboxComponent,
    GaggleInputComponent,
    FormControlPipe,
    GaggleOverlayComponent,
    GaggleIconMenuButton
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GaggleCheckboxComponent,
    GaggleInputComponent,
    FormControlPipe,
    GaggleOverlayComponent,
    GaggleIconMenuButton
  ],
  providers: [
    FormControlPipe
  ]

})

export class SharedModule { }
