import {AfterViewInit, Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, AfterViewInit {

  @HostBinding("style.visibility") visibility = "hidden";
  @ViewChild('regUsername') usernameField!: GaggleInputComponent;
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

  ngAfterViewInit() {
    setTimeout(() => this.usernameField.inputElement.nativeElement.focus(), 100);
  }

  open(): void {
    this.visibility = 'visible';
  }

  close(): void {
    if (this.visibility === 'visible') {
      this.visibility = 'hidden';
    }
  }

  registerUser(): void {
    alert('Do that registration thing!');
    this.registrationForm.reset();
    this.close();
  }


}
