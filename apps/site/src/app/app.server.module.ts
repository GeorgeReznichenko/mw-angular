import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppContainerComponent } from './app-container.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule, ModuleMapLoaderModule],
  bootstrap: [AppContainerComponent],
})
export class AppServerModule {}
