import { ControlValueAccessor } from '@angular/forms';

export class BaseControlValueAccessor<T> implements ControlValueAccessor {
  public disabled: boolean = false;
  public value: T;
  /**
   * Call when value has changed programatically
   */
  public onChange: (newVal: T) => void = () => {};
  public onTouched: (_?: any) => void = () => {};

  /**
   * Model -> View changes
   */
  public writeValue(obj: T): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
