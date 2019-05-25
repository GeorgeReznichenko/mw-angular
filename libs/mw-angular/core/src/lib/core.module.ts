import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ENVIRONMENT } from './tokens/environment.token';

@NgModule()
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import it in the AppModule only.`);
    }
  }

  static forRoot(environment: { [key: string]: any }): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: ENVIRONMENT, useValue: environment }],
    };
  }
}
