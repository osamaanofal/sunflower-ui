import { TestBed } from '@angular/core/testing';

import { BaseModelService } from './base-model.service';

describe('BaseModelService', () => {
  let service: BaseModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
