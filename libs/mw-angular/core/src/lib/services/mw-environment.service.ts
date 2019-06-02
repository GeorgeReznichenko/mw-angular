import { Inject, Injectable } from '@angular/core';
import { MW_ENVIRONMENT } from '../tokens/mw-environment.token';

@Injectable({
  providedIn: 'root',
})
export class MwEnvironmentService {
  constructor(@Inject(MW_ENVIRONMENT) private mwEnvironment: any) {}

  getValue(key: string, defaultValue?: any): any {
    if (this.mwEnvironment[key] === undefined && defaultValue === undefined) {
      throw new Error(`MwEnvironment variable '${key}' is not set.`);
    }

    return this.mwEnvironment[key] || defaultValue;
  }
}
