import { TestBed } from '@angular/core/testing';

import { OnlineClassHttpService } from './online-class-http.service';

describe('OnlineClassHttpService', () => {
  let service: OnlineClassHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineClassHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
