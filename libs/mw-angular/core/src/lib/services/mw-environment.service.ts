import { Inject, Injectable, Optional } from '@angular/core';
import { MW_ENVIRONMENT } from '../tokens/mw-environment.token';

@Injectable({
  providedIn: 'root',
})
export class MwEnvironmentService {
  private readonly environment: any;

  constructor(@Optional() @Inject(MW_ENVIRONMENT) mwEnvironment: any) {
    this.environment = mwEnvironment !== null ? mwEnvironment : {};
  }

  getValue(key: string, defaultValue?: any): any {
    return this.environment[key] || defaultValue;
  }
}
