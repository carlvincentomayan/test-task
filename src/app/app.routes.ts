import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TaskInfoFormComponent } from './components/pages/home/task-info-form/task-info-form.component';
import { NewTaskFormComponent } from './components/pages/home/new-task-form/new-task-form.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task/:id', component: TaskInfoFormComponent },
  {path: 'newtask', component: NewTaskFormComponent }
   
];
