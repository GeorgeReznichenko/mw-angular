import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';

@NgModule({
  exports: [CommonModule, RouterModule, MaterialModule, TranslateModule],
})
export class SharedModule {}
