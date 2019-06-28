import { Injectable } from '@angular/core';
import { MwEnvironmentService } from './mw-environment.service';
import { MwPlatformService } from './mw-platform.service';

@Injectable({
  providedIn: 'root',
})
export class MwLocalStorageService {
  private readonly envKeyPrefix = 'localStorageKeyPrefix';

  constructor(private mwPlatformService: MwPlatformService, private mwEnvironmentService: MwEnvironmentService) {}

  private serialize(data: any): string {
    return JSON.stringify(data);
  }

  private unserialize<T>(data: string): T {
    return JSON.parse(data);
  }

  setItem(key: string, value: any): void {
    if (this.mwPlatformService.isBrowser()) {
      const serializedData = this.serialize(value);
      localStorage.setItem(this.getPrefixedKey(key), serializedData);
    }
  }

  getItem<T>(key: string): T | null {
    if (this.mwPlatformService.isBrowser()) {
      const value = localStorage.getItem(this.getPrefixedKey(key));
      if (value !== null) {
        return this.unserialize<T>(value);
      }
    }

    return null;
  }

  deleteItem(key: string): void {
    if (this.mwPlatformService.isBrowser()) {
      localStorage.removeItem(this.getPrefixedKey(key));
    }
  }

  clear(): void {
    if (this.mwPlatformService.isBrowser()) {
      localStorage.clear();
    }
  }

  private getPrefixedKey(key: string): string {
    return this.mwEnvironmentService.getValue(this.envKeyPrefix, '') + key;
  }
}
