import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordFormComponent } from './reset-password-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormControlPipe } from "../../../shared/pipes/form-control.pipe";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";
import {GaggleCheckboxComponent} from "../../../shared/form-controls/gaggle-checkbox/gaggle-checkbox.component";

describe('ResetPasswordFormComponent', () => {
  let component: ResetPasswordFormComponent;
  let fixture: ComponentFixture<ResetPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ ResetPasswordFormComponent, GaggleInputComponent, GaggleCheckboxComponent, FormControlPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
