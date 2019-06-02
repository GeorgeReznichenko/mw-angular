import { Injectable } from '@angular/core';
import { MwPlatformService } from './mw-platform.service';

@Injectable({
  providedIn: 'root',
})
export class MwLocalStorageService {
  constructor(protected mwPlatformService: MwPlatformService) {}

  protected static serialize(data: any): string {
    return JSON.stringify(data);
  }

  protected static unserialize<T>(data: string): T {
    return JSON.parse(data);
  }

  setItem(key: string, value: any): void {
    if (this.mwPlatformService.isBrowser()) {
      const serializedData = MwLocalStorageService.serialize(value);
      localStorage.setItem(key, serializedData);
    }
  }

  getItem<T>(key: string): T | null {
    if (this.mwPlatformService.isBrowser()) {
      const value = localStorage.getItem(key);
      if (value !== null) {
        return MwLocalStorageService.unserialize<T>(value);
      }
    }

    return null;
  }

  deleteItem(key: string): void {
    if (this.mwPlatformService.isBrowser()) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.mwPlatformService.isBrowser()) {
      localStorage.clear();
    }
  }
}
