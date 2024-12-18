import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-task-info-form',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './task-info-form.component.html',
  styleUrl: './task-info-form.component.scss',
})
export class TaskInfoFormComponent {
  taskId: string | null | undefined
  data : any | undefined;
  constructor(private route: ActivatedRoute,private taskService: TaskService) {

  }

  ngOnInit(): void {
    let data = this.taskService.currentDataStored;
    if (data.length <= 0) {
      data  = this.taskService.getItem('taskActions');
    }
    this.taskId = this.route.snapshot.paramMap.get('id'); 
    this.data = data.filter((elem:any) => String(elem.id).toString() == this.taskId)[0]
  }
}
