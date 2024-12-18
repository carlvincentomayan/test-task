import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [

  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  label = input('');
  value = signal(false);
  id = input('');

  onChange = (value: boolean) => { 
    console.log(value)
  };
  onTouched = () => { };

  writeValue(value: boolean): void {
    this.value.set(value);
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(event: Event) {
    const el = event.target as HTMLInputElement;
    const value = el.checked
    this.onChange(value);
    this.value.set(value);
  }
  
}
