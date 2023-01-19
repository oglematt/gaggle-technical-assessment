import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'gaggle-checkbox',
  templateUrl: './gaggle-checkbox.component.html',
  styleUrls: ['./gaggle-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GaggleCheckboxComponent),
    multi: true
  }]
})

export class GaggleCheckboxComponent implements ControlValueAccessor {

  public disabled: boolean = false;

  @Input() label: string = '';
  @Input() inputId: string = Math.random().toString(36).substring(5);

  constructor() { }

  onChange: any = () => {};
  onTouch: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  checked: boolean = false;

  writeValue(checked: boolean) {
    this.checked = checked;
  }

  onModelChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
