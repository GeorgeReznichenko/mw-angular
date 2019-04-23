import { TestBed } from '@angular/core/testing';

import { ComplexFilterService } from './complex-filter.service';

describe('ComplexFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplexFilterService = TestBed.get(ComplexFilterService);
    expect(service).toBeTruthy();
  });
});
