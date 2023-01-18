import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayoutComponent } from './auth-layout.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {FormControlPipe} from "../../../shared/pipes/form-control.pipe";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";
import {GaggleCheckboxComponent} from "../../../shared/form-controls/gaggle-checkbox/gaggle-checkbox.component";

describe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent;
  let fixture: ComponentFixture<AuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ AuthLayoutComponent, GaggleInputComponent, GaggleCheckboxComponent, FormControlPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
