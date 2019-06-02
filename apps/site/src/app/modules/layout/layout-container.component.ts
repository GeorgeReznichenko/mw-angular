import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MwErrorLockService, MwMetaService, MwErrorLock } from '@mw-angular/core';
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
      <app-layout (changeThemeEvent)="onChangeThemeEvent()">
        <ng-content></ng-content>
      </app-layout>
    </ng-template>
  `,
})
export class LayoutContainerComponent {
  errorLock$: Observable<MwErrorLock | null>;
  pageTitle$: Observable<string>;

  constructor(
    private mwErrorLockService: MwErrorLockService,
    private mwMetaService: MwMetaService,
    private themesService: ThemesService,
  ) {
    this.errorLock$ = this.mwErrorLockService.getErrorLock();
    this.pageTitle$ = this.mwMetaService.getPageTitle();
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
