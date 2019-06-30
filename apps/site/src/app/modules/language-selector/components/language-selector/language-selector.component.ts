import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from '../../../../../cross-platform/languages/entities/language';

@Component({
  selector: 'app-language-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  @Input() currentLang: Language | null;
  @Input() acceptedLangs: Language[];

  @Output() langSelectEvent = new EventEmitter<Language>();
}
