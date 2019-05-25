import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../tokens/environment.token';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor(@Inject(ENVIRONMENT) private environment: any) {}

  getValue(key: string, defaultValue?: any): any {
    if (this.environment[key] === undefined && defaultValue === undefined) {
      throw new Error(`Environment variable '${key}' is not set.`);
    }

    return this.environment[key] || defaultValue;
  }
}
