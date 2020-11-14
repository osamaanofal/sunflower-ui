import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassesModalComponent } from './student-classes-modal.component';

describe('StudentClassesModalComponent', () => {
  let component: StudentClassesModalComponent;
  let fixture: ComponentFixture<StudentClassesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentClassesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentClassesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
