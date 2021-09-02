import { TestBed } from '@angular/core/testing';

import { CamasService } from './camas.service';

describe('CamasService', () => {
  let service: CamasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
