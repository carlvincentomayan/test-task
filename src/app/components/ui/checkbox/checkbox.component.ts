import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,MatFormFieldModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  form: FormGroup;
    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        agreeToTerms: [false], // Default value
      });
    }
}
