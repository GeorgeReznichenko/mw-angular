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

  storeTheme(theme: Theme): Observable<Theme> {
    return new Observable((subscriber: Subscriber<Theme>) => {
      this.mwLocalStorageService.setItem(this.storageKey, theme);
      subscriber.next(theme);
      subscriber.complete();

      return () => {};
    });
  }

  getStoredTheme(): Observable<Theme | null> {
    return of(this.mwLocalStorageService.getItem(this.storageKey));
  }
}
