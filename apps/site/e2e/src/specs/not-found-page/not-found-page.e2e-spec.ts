import { browserErrorsCheck } from '../../helpers/browser-errors-check.helper';
import { NotFoundPagePo } from '../../pages/not-found-page/not-found-page.po';

describe('Not Found Page', () => {
  let notFoundPage: NotFoundPagePo;

  beforeEach(() => {
    notFoundPage = new NotFoundPagePo();
  });

  it('should display 404 code and description for en', () => {
    notFoundPage.navigateToEn();
    expect(notFoundPage.getCodeText()).toEqual('404');
    expect(notFoundPage.getDescriptionText()).toEqual('PAGE NOT FOUND');
  });

  it('should display 404 code and description for ru', () => {
    notFoundPage.navigateToRu();
    expect(notFoundPage.getCodeText()).toEqual('404');
    expect(notFoundPage.getDescriptionText()).toEqual('СТРАНИЦА НЕ НАЙДЕНА');
  });

  afterEach(() => {
    browserErrorsCheck();
  });
});
