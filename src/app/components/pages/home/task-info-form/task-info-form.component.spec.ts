import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoFormComponent } from './task-info-form.component';

describe('TaskInfoFormComponent', () => {
  let component: TaskInfoFormComponent;
  let fixture: ComponentFixture<TaskInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInfoFormComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
