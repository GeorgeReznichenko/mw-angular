import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComplexFilterModule } from '@mw-angular/complex-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComplexFilterModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
