import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterClassModalComponent } from './student-register-class-modal.component';

describe('StudentRegisterClassModalComponent', () => {
  let component: StudentRegisterClassModalComponent;
  let fixture: ComponentFixture<StudentRegisterClassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterClassModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
