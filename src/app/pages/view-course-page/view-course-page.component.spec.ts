import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoursePageComponent } from './view-course-page.component';

describe('ViewCoursePageComponent', () => {
  let component: ViewCoursePageComponent;
  let fixture: ComponentFixture<ViewCoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCoursePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
