import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassesPageComponent } from './online-classes-page.component';

describe('OnlineClassesPageComponent', () => {
  let component: OnlineClassesPageComponent;
  let fixture: ComponentFixture<OnlineClassesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineClassesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
