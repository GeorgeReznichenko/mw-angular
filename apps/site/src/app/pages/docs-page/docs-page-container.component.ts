import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { MetaService } from '../../modules/core/services/meta.service';
import { TRANSLATE } from '../../modules/translations/helpers/translation-marker.helper';
import { CurrentLanguageService } from '../../modules/translations/services/current-language.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-docs-layout-container>
      <app-docs-page [currentLangId]="currentLangId$ | async"></app-docs-page>
    </app-docs-layout-container>
  `,
})
export class DocsPageContainerComponent implements OnInit, OnDestroy {
  currentLangId$: Observable<string>;

  private destroySubject = new Subject();

  constructor(private metaService: MetaService, private currentLanguageService: CurrentLanguageService) {
    this.currentLangId$ = this.currentLanguageService.getCurrentLang().pipe(pluck('id'));
  }

  ngOnInit(): void {
    this.currentLanguageService
      .getCurrentLang()
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        this.metaService.setTitle(TRANSLATE('DocsPageContainerComponent.Title'));
      });
  }

  public ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
