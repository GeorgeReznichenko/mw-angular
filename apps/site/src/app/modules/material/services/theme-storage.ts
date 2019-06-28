import { Injectable } from '@angular/core';
import { MwLocalStorageService } from '@mw-angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { Theme } from '../types/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeStorage {
  private readonly storageKey = 'theme';

  constructor(private mwLocalStorageService: MwLocalStorageService) {}

  storeTheme(theme: Theme): Observable<void> {
    return new Observable((subscriber: Subscriber<void>) => {
      subscriber.next(this.mwLocalStorageService.setItem(this.storageKey, theme));
      subscriber.complete();

      return () => {};
    });
  }

  getStoredTheme(): Observable<Theme | null> {
    return of(this.mwLocalStorageService.getItem(this.storageKey));
  }
}
