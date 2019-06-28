import { UrlMatchResult, UrlSegment } from '@angular/router';
import { AcceptedLanguagesService } from '../services/accepted-languages.service';

export function langRoutesMatcher(segments: UrlSegment[]): UrlMatchResult {
  let result: UrlMatchResult = {
    consumed: [],
  };

  const acceptedLangIds = AcceptedLanguagesService.acceptedLangs.map((lang) => lang.id);

  if (segments.length > 0 && acceptedLangIds.includes(segments[0].path)) {
    result = {
      consumed: [segments[0]],
      posParams: { langId: segments[0] },
    };
  }

  return result;
}
