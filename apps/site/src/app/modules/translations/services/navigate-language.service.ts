import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AcceptedLanguagesService } from '../../../../cross-platform/languages/services/accepted-languages.service';

@Injectable({
  providedIn: 'root',
})
export class NavigateLanguageService {
  private acceptedLanguagesService: AcceptedLanguagesService;

  constructor(private router: Router, private location: Location) {
    this.acceptedLanguagesService = new AcceptedLanguagesService();
  }

  navigateSameUrlAnotherLang(langId: string): void {
    const urlParts = this.location.path(true).split('/');
    const acceptedLangIds = this.acceptedLanguagesService.getAcceptedLangIds();

    if (!acceptedLangIds.includes(langId)) {
      throw new Error(`Language id: ${langId} does not accepted.`);
    }

    urlParts[1] = langId;

    this.router.navigateByUrl(urlParts.join('/'));
  }
}
