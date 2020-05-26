import { TestBed } from '@angular/core/testing';

import { IncsalaryService } from './incsalary.service';

describe('IncsalaryService', () => {
  let service: IncsalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncsalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
