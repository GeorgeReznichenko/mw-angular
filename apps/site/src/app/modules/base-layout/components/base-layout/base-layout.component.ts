import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-base-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  @Output()
  changeThemeEvent = new EventEmitter<void>();

  isBigScreen$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isBigScreen$ = this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches));
  }
}
