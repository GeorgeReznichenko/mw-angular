import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // DON'T CHANGE "app-not-found-error", it's used to determine 404 HTTP status code -->
  selector: 'app-not-found-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './not-found-error.component.html',
  styleUrls: ['./not-found-error.component.scss'],
})
export class NotFoundErrorComponent {}
