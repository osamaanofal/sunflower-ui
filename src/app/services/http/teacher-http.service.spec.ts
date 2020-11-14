import { TestBed } from '@angular/core/testing';

import { TeacherHttpService } from './teacher-http.service';

describe('TeacherHttpService', () => {
  let service: TeacherHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
