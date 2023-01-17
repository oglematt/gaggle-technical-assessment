import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
  selector: 'gaggle-input',
  templateUrl: './gaggle-input.component.html',
  styleUrls: ['./gaggle-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: GaggleInputComponent,
    multi: true
  }]
})

export class GaggleInputComponent implements OnInit, ControlValueAccessor {

  public value: string = '';
  public disabled: boolean = false;
  public focused: boolean = false;
  public showPassword: boolean = false;
  public type!: string;

  @ViewChild('input') inputElement!: ElementRef;

  @Input() label: string = '';
  @Input() inputId: string = '';
  @Input() inputType: string = '';
  @Input() control: FormControl | null = new FormControl();

  private _suppressErrors: boolean = false;
  @Input()
  set suppressErrors(p: boolean) {
    this._suppressErrors = typeof p !== 'undefined' ? p : false;
  }
  get suppressErrors(): boolean {
    return this._suppressErrors;
  }

  constructor() { }

  ngOnInit() {
    this.type = this.inputType;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(value: any) {
    this.value = value;
  }

  onModelChange(value: any) {
    this.value = value;
    this.onChange(value);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  clearInput(e: Event) {
    this.value = '';
    this.onChange(this.value);
    setTimeout(() => this.inputElement.nativeElement.focus())
  }

  toggleFocus(e: FocusEvent): void {
    this.focused = e.type === 'focusin';
    console.log(e);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}
