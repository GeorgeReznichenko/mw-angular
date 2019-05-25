import { async, TestBed } from '@angular/core/testing';
import { ComplexFilterModule } from './complex-filter.module';

describe('ComplexFilterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComplexFilterModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComplexFilterModule).toBeDefined();
  });
});
