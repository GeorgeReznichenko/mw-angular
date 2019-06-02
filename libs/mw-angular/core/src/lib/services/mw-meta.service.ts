import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { MwEnvironmentService } from './mw-environment.service';

@Injectable({
  providedIn: 'root',
})
export class MwMetaService {
  private pageTitleSubject = new BehaviorSubject<string>('');

  constructor(private mwEnvironmentService: MwEnvironmentService, private title: Title) {}

  setTitle(title: string): any {
    const prefix = this.mwEnvironmentService.getValue('titlePrefix', '');
    const postfix = this.mwEnvironmentService.getValue('titlePostfix', '');

    this.title.setTitle(`${prefix}${title}${postfix}`);
    this.pageTitleSubject.next(title);
  }

  getPageTitle(): Observable<string> {
    return this.pageTitleSubject.asObservable();
  }
}
