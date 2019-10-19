import { TestBed } from '@angular/core/testing';

import { ListeCategorieService } from './liste-categorie.service';

describe('ListeCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeCategorieService = TestBed.get(ListeCategorieService);
    expect(service).toBeTruthy();
  });
});
