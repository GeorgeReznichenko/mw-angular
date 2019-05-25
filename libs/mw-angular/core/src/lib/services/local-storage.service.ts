import { Injectable } from '@angular/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(protected platformService: PlatformService) {}

  protected static serialize(data: any): string {
    return JSON.stringify(data);
  }

  protected static unserialize<T>(data: string): T {
    return JSON.parse(data);
  }

  setItem(key: string, value: any): void {
    if (this.platformService.isBrowser()) {
      const serializedData = LocalStorageService.serialize(value);
      localStorage.setItem(key, serializedData);
    }
  }

  getItem<T>(key: string): T | null {
    if (this.platformService.isBrowser()) {
      const value = localStorage.getItem(key);
      if (value !== null) {
        return LocalStorageService.unserialize<T>(value);
      }
    }

    return null;
  }

  deleteItem(key: string): void {
    if (this.platformService.isBrowser()) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.platformService.isBrowser()) {
      localStorage.clear();
    }
  }
}
