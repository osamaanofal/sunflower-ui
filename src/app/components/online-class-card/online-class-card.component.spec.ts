import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassCardComponent } from './online-class-card.component';

describe('OnlineClassCardComponent', () => {
  let component: OnlineClassCardComponent;
  let fixture: ComponentFixture<OnlineClassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineClassCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
