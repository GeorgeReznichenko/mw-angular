import { HttpClient } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CurrentLanguageService } from './services/current-language.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class TranslationsModule {
  constructor(
    @Optional() @SkipSelf() parentModule: TranslationsModule,
    currentLanguageService: CurrentLanguageService,
  ) {
    if (parentModule) {
      throw new Error(`TranslationsModule has already been loaded. Import it in the AppModule only.`);
    }

    currentLanguageService.init();
  }
}
