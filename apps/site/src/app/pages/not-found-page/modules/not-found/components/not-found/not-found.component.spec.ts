import { async, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    }).compileComponents();
  }));

  it('should render 404 title', async(() => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    // fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.not-found__code').textContent).toBe('404');
  }));
});
