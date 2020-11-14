import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTemplateModalComponent } from './generic-template-modal.component';

describe('GenericTemplateModalComponent', () => {
  let component: GenericTemplateModalComponent;
  let fixture: ComponentFixture<GenericTemplateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTemplateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTemplateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
