import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MW_ENVIRONMENT } from './tokens/mw-environment.token';

@NgModule()
export class MwCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: MwCoreModule) {
    if (parentModule) {
      throw new Error(`MwCoreModule has already been loaded. Import it in the AppModule only.`);
    }
  }

  static forRoot(environment: { [key: string]: any }): ModuleWithProviders {
    return {
      ngModule: MwCoreModule,
      providers: [{ provide: MW_ENVIRONMENT, useValue: environment }],
    };
  }
}
