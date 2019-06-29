import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../../../../cross-platform/languages/entities/language';
import { AcceptedLanguagesService } from '../../../../../cross-platform/languages/services/accepted-languages.service';
import { CurrentLanguageService } from '../../services/current-language.service';

@Component({
  selector: 'app-language-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  currentLang$: Observable<Language>;
  acceptedLangs: Language[];

  private acceptedLanguagesService: AcceptedLanguagesService;

  constructor(private currentLanguageService: CurrentLanguageService) {
    this.acceptedLanguagesService = new AcceptedLanguagesService();

    this.currentLang$ = this.currentLanguageService.getCurrentLang();
    this.acceptedLangs = this.acceptedLanguagesService.getAcceptedLangs();
  }

  onLangSelect(langId: string) {
    console.log(langId);
  }
}
