import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Input() showForm: boolean = false;
  @Output() showFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [ Validators.required ] ],
      password: ['', [ Validators.required, Validators.minLength(8) ] ],
      email: ['', [ Validators.email ] ]
    });
  }

  hideForm(): void {
    this.showFormChange.emit(false);
  }

  registerUser(): void {
    alert('Do that registration thing!');
    this.hideForm();
  }


}
