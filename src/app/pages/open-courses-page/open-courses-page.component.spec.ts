import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCoursesPageComponent } from './open-courses-page.component';

describe('OpenCoursesPageComponent', () => {
  let component: OpenCoursesPageComponent;
  let fixture: ComponentFixture<OpenCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCoursesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
