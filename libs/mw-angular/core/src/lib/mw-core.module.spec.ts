import { async, TestBed } from '@angular/core/testing';
import { MwCoreModule } from './mw-core.module';

describe('MwCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MwCoreModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MwCoreModule).toBeDefined();
  });
});
