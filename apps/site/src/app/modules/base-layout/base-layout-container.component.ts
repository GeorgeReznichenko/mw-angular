import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MwErrorLock, MwErrorLockService } from '@mw-angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ThemesService } from '../material/services/themes.service';
import { Theme } from '../material/types/theme';

@Component({
  selector: 'app-base-layout-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template [ngIf]="(errorLock$ | async) !== null" [ngIfElse]="layout">
      <app-server-error
        [code]="(errorLock$ | async)?.code"
        [description]="(errorLock$ | async)?.description"
      ></app-server-error>
    </ng-template>

    <ng-template #layout>
      <app-base-layout (changeThemeEvent)="onChangeThemeEvent()">
        <ng-content></ng-content>
      </app-base-layout>
    </ng-template>
  `,
})
export class BaseLayoutContainerComponent {
  errorLock$: Observable<MwErrorLock | null>;

  constructor(private mwErrorLockService: MwErrorLockService, private themesService: ThemesService) {
    this.errorLock$ = this.mwErrorLockService.getErrorLock();
  }

  onChangeThemeEvent(): void {
    this.themesService
      .getSelectedTheme()
      .pipe(take(1))
      .subscribe((theme: Theme) => {
        theme === Theme.LightTheme
          ? this.themesService.setSelectedTheme(Theme.DarkTheme)
          : this.themesService.setSelectedTheme(Theme.LightTheme);
      });
  }
}
