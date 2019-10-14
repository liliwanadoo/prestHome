import { TestBed } from '@angular/core/testing';

import { ListeCoordonneeService } from './liste-coordonnee.service';

describe('ListeCoordonneeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeCoordonneeService = TestBed.get(ListeCoordonneeService);
    expect(service).toBeTruthy();
  });
});
