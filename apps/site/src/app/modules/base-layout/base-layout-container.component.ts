import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MwErrorLock, MwErrorLockService } from '@mw-angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { ThemeStorage } from '../material/services/theme-storage';
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
export class BaseLayoutContainerComponent implements OnDestroy {
  errorLock$: Observable<MwErrorLock | null>;

  private destroySubject = new Subject();

  constructor(
    private mwErrorLockService: MwErrorLockService,
    private themesService: ThemesService,
    private themeStorage: ThemeStorage,
  ) {
    this.errorLock$ = this.mwErrorLockService.getErrorLock();

    this.initThemeStorage();
  }

  onChangeThemeEvent(): void {
    this.themesService
      .getSelectedTheme()
      .pipe(
        take(1),
        takeUntil(this.destroySubject),
      )
      .subscribe((theme: Theme) => {
        const selectedTheme = theme === Theme.LightTheme ? Theme.DarkTheme : Theme.LightTheme;

        this.themesService.setSelectedTheme(selectedTheme);
        this.themeStorage.storeTheme(selectedTheme).subscribe();
      });
  }

  private initThemeStorage(): void {
    this.themeStorage
      .getStoredTheme()
      .pipe(
        filter(Boolean),
        takeUntil(this.destroySubject),
      )
      .subscribe((theme: Theme) => this.themesService.setSelectedTheme(theme));
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
