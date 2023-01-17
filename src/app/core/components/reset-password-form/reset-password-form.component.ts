import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  public resetPasswordForm!: FormGroup;
  @Input() showForm: boolean = false;
  @Output() showFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ] ]
    })
  }

  hideForm(): void {
    this.showFormChange.emit(false);
  }

  resetPassword(): void {
    alert('You should receive an email with instructions at ' + this.resetPasswordForm.get('email')?.value + ' shortly.')
  }

}
