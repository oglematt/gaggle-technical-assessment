import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit, AfterViewInit {

  public resetPasswordForm!: FormGroup;
  @Input() showForm: boolean = false;
  @Output() showFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('email') emailField!: GaggleInputComponent;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ] ]
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.emailField.inputElement.nativeElement.focus(), 100);
  }

  hideForm(): void {
    this.showFormChange.emit(false);
  }

  resetPassword(): void {
    alert('You should receive an email with instructions at ' + this.resetPasswordForm.get('email')?.value + ' shortly.');
    this.hideForm();
  }

}
