import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MwEnvironmentService } from './mw-environment.service';

@Injectable({
  providedIn: 'root',
})
export class MwMetaService {
  constructor(private mwEnvironmentService: MwEnvironmentService, private title: Title) {}

  setTitle(title: string): any {
    const prefix = this.mwEnvironmentService.getValue('titlePrefix', '');
    const postfix = this.mwEnvironmentService.getValue('titlePostfix', '');

    this.title.setTitle(`${prefix}${title}${postfix}`);
  }
}
