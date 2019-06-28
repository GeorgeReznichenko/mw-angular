import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, take } from 'rxjs/operators';
import { DefaultLanguageService } from './default-language.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentLanguageService {
  private currentLangIdSubject = new ReplaySubject<string>(1);

  constructor(private defaultLanguageService: DefaultLanguageService) {
    this.initDefaultLang();
  }

  private initDefaultLang(): void {
    this.defaultLanguageService
      .getDefaultLangId()
      .pipe(take(1))
      .subscribe((defaultLangId: string) => this.setCurrentLangId(defaultLangId));
  }

  getCurrentLangId(): Observable<string> {
    return this.currentLangIdSubject.pipe(distinctUntilChanged());
  }

  setCurrentLangId(langId: string): void {
    this.currentLangIdSubject.next(langId);
  }
}
