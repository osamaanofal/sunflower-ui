import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnlineClassModalComponent } from './create-online-class-modal.component';

describe('CreateOnlineClassModalComponent', () => {
  let component: CreateOnlineClassModalComponent;
  let fixture: ComponentFixture<CreateOnlineClassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnlineClassModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOnlineClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
