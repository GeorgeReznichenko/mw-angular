import { browser, by, element } from 'protractor';

export class NotFoundPagePo {
  navigateToEn() {
    return browser.get(`${browser.baseUrl}en/not-found-page`) as Promise<any>;
  }

  navigateToRu() {
    return browser.get(`${browser.baseUrl}ru/not-found-page`) as Promise<any>;
  }

  getCodeText() {
    return element(by.css('.e2e-error-code')).getText() as Promise<string>;
  }

  getDescriptionText() {
    return element(by.css('.e2e-error-description')).getText() as Promise<string>;
  }
}
