import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MwCoreModule } from '@mw-angular/core';
import { environment } from '../environments/environment';
import { AppContainerComponent } from './app-container.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseLayoutModule } from './modules/base-layout/base-layout.module';
import { TranslationModule } from './modules/translation/translation.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    TranslationModule,
    MwCoreModule.forRoot(environment),
    AppRoutingModule,
    BaseLayoutModule,
  ],
  declarations: [AppContainerComponent],
  bootstrap: [AppContainerComponent],
})
export class AppModule {}
