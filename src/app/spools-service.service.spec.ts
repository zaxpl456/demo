import { TestBed } from '@angular/core/testing';

import { SpoolsServiceService } from './spools-service.service';

describe('SpoolsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpoolsServiceService = TestBed.get(SpoolsServiceService);
    expect(service).toBeTruthy();
  });
});
