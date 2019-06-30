import { Location } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Language } from '../../../../cross-platform/languages/entities/language';
import { CurrentLanguageService } from '../../translations/services/current-language.service';

@Pipe({ name: 'addLangToLink' })
export class AddLangToLinkPipe implements PipeTransform {
  constructor(private currentLanguageService: CurrentLanguageService, private location: Location) {}

  transform(value: string | string[]): Observable<string | string[]> {
    return this.currentLanguageService.getCurrentLang().pipe(
      map((lang: Language) => {
        if (Array.isArray(value)) {
          const newValue = [...value];
          newValue[0] = this.location.normalize(`/${lang.id}${newValue[0]}`);
          return newValue;
        } else {
          return this.location.normalize(`/${lang.id}${value}`);
        }
      }),
    );
  }
}
