import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnlineClassComponent } from './create-online-class.component';

describe('CreateOnlineClassComponent', () => {
  let component: CreateOnlineClassComponent;
  let fixture: ComponentFixture<CreateOnlineClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnlineClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOnlineClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
