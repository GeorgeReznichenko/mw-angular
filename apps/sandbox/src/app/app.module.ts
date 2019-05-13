import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplexFilterModule, MaterialComplexFilterElementsModule } from '@mw-angular/complex-filter';
import { WebcamModule } from '@mw-angular/webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComplexFilterModule,
    MaterialComplexFilterElementsModule,
    WebcamModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
