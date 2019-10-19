import { TestBed } from '@angular/core/testing';

import { AuthantificationService } from './authantification.service';

describe('AuthantificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthantificationService = TestBed.get(AuthantificationService);
    expect(service).toBeTruthy();
  });
});
