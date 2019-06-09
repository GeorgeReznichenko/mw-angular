import { browser, by, element } from 'protractor';

export class NotFoundPagePo {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/not-found-page`) as Promise<any>;
  }

  getCodeText() {
    return element(by.css('.e2e-error-code')).getText() as Promise<string>;
  }
}
