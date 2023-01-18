import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormControlPipe} from "../../../shared/pipes/form-control.pipe";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";
import {GaggleCheckboxComponent} from "../../../shared/form-controls/gaggle-checkbox/gaggle-checkbox.component";

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ RegistrationFormComponent, GaggleInputComponent, GaggleCheckboxComponent, FormControlPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
