import { Injectable } from '@angular/core';
import { MwMetaService } from '@mw-angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private mwMetaService: MwMetaService, private translateService: TranslateService) {}

  setTitle(title: string): void {
    this.translateService
      .get(title)
      .pipe(take(1))
      .subscribe((res: string) => {
        this.mwMetaService.setTitle(res);
      });
  }

  getPageTitle(): Observable<string> {
    return this.mwMetaService.getPageTitle();
  }
}
