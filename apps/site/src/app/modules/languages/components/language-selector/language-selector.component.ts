import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../entities/language';
import { AcceptedLanguagesService } from '../../services/accepted-languages.service';
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

  constructor(
    private currentLanguageService: CurrentLanguageService,
    private acceptedLanguagesService: AcceptedLanguagesService,
  ) {
    this.currentLang$ = this.currentLanguageService.getCurrentLang();
    this.acceptedLangs = this.acceptedLanguagesService.getAcceptedLangs();
  }
}
