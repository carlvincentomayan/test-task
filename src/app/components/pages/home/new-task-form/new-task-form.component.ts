import { Component, Inject } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { CheckboxComponent } from '../../../ui/checkbox/checkbox.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskService } from '../../../../services/task.service';
@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
    MatToolbarModule
    
  ],
  providers:[
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})
export class NewTaskFormComponent {
  form: FormGroup;
  constructor( private fb: FormBuilder, 
     public dialogRef: MatDialogRef<NewTaskFormComponent>,
     private taskService : TaskService,
     private router: Router){
      this.form = this.fb.group({
        id:[ Math.floor(Math.random() * 100)],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        task: ['', Validators.required],
        didagree: [false, Validators.required],
      });

  }
  
  onSave(): void {
    this.taskService.appendToArray('taskActions', JSON.stringify(this.form.value));
    this.redirectToMainPage();
    this.form.reset();
  }
  onchange() {
    console.log(this.form);
  }

  redirectToMainPage(): void {
    this.router.navigate(['/']);  // Assuming '/' is the main page route
  }
}
