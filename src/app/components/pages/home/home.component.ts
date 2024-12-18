import { Component } from '@angular/core';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../../../services/task.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from '../../ui/input/input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash';
export interface Element {
  firstname: string;
  lastname: string;
  task: string;
  didagree: boolean;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NewTaskFormComponent,
    MatTableModule,
    MatFormFieldModule ,
    MatButtonModule,
    MatToolbarModule,
    CommonModule ,
    RouterModule,
    MatIconModule,
    InputComponent,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  ELEMENT_DATA: Element[] = []
  
  displayedColumns: string[] = ['id','firstName', 'lastName','task' ,'didagree']; // Define the columns
  dataSource: any[] = [];  // Table data
  dataSourceForSave: any[] = [];  // Table data
  element: any;
  private taskDataSubject = new BehaviorSubject<any>([]);
  taskData$ = this.taskDataSubject.asObservable();
  // Sample data for the table
  constructor(private tasklistService :TaskService  ) {
    this.taskData$.subscribe((data) => {
      if (data.length > 0) {
        data.forEach((element: { [x: string]: { value: any; }; }) => {
          element['didagree'] = element["didagree"].value;
        });
        this.tasklistService.updateStorage('taskActions',data);
      }
    })

  }

  ngOnInit(): void {
    const data  = this.tasklistService.getItem('taskActions');
    if (data) {
      data.forEach(function(_currentValue: any, _index: any, array: any) {
        console.log(_index);
        array[_index]['didagree'] = new FormControl(array[_index]['didagree'] ? true : false) 
      });
      this.dataSource=data;
    }
    
  }
  onchange() {
    console.log(this.dataSource)
    let dataSourceForSave = [];
    dataSourceForSave = cloneDeep(this.dataSource);
    this.taskDataSubject.next(dataSourceForSave)
  }

  toggleAllRows(event: any): void {
    const isChecked = event.checked;
    this.dataSource.forEach(row => row.didagree = isChecked);
   
  }

  // Check if all checkboxes are selected
  allSelected(): boolean {
    return this.dataSource.every(row => row.didagree.valueOf);
  }

}

