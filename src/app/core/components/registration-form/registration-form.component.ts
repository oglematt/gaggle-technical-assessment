import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GaggleInputComponent} from "../../../shared/form-controls/gaggle-input/gaggle-input.component";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, AfterViewInit {

  @ViewChild('regUsername') usernameField!: GaggleInputComponent;

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

  ngAfterViewInit() {
    setTimeout(() => this.usernameField.inputElement.nativeElement.focus(), 100);
  }

  hideForm(): void {
    this.showFormChange.emit(false);
  }

  registerUser(): void {
    alert('Do that registration thing!');
    this.hideForm();
  }


}
