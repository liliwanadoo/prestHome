import { TestBed } from '@angular/core/testing';

import { PrestataireListService } from './prestataire-list.service';

describe('PrestataireListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestataireListService = TestBed.get(PrestataireListService);
    expect(service).toBeTruthy();
  });
});
