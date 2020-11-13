import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnlineClassPageComponent } from './create-online-class-page.component';

describe('CreateOnlineClassPageComponent', () => {
  let component: CreateOnlineClassPageComponent;
  let fixture: ComponentFixture<CreateOnlineClassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnlineClassPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOnlineClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
