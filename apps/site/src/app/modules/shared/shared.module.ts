import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { AddLangToLinkPipe } from './pipes/add-lang-to-link.pipe';

@NgModule({
  declarations: [AddLangToLinkPipe],
  exports: [CommonModule, RouterModule, MaterialModule, TranslateModule, AddLangToLinkPipe],
})
export class SharedModule {}
