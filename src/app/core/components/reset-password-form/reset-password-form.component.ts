import {
  AfterViewInit,
  Component,
  HostBinding,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit, AfterViewInit {

  @HostBinding("style.visibility") visibility = "hidden";
  @ViewChild('email') emailField!: GaggleInputComponent;
  public resetPasswordForm!: FormGroup;

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

  open(): void {
    this.visibility = 'visible';
  }

  close(): void {
    if (this.visibility === 'visible') {
      this.visibility = 'hidden';
    }
  }

  resetPassword(): void {
    alert('You should receive an email with instructions at ' + this.resetPasswordForm.get('email')?.value + ' shortly.');
    this.resetPasswordForm.reset();
    this.close();
  }

}
