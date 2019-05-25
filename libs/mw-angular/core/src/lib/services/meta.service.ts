import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private pageTitleSubject = new BehaviorSubject<string>('');

  constructor(private environmentService: EnvironmentService, private title: Title) {}

  setTitle(title: string): any {
    const prefix = this.environmentService.getValue('titlePrefix', '');
    const postfix = this.environmentService.getValue('titlePostfix', '');

    this.title.setTitle(`${prefix}${title}${postfix}`);
    this.pageTitleSubject.next(title);
  }

  getPageTitle(): Observable<string> {
    return this.pageTitleSubject.asObservable();
  }
}
