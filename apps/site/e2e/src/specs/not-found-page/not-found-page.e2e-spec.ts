import { browserErrorsCheck } from '../../helpers/browser-errors-check.helper';
import { NotFoundPagePo } from '../../pages/not-found-page/not-found-page.po';

describe('Not Found Page', () => {
  let notFoundPage: NotFoundPagePo;

  beforeEach(() => {
    notFoundPage = new NotFoundPagePo();
  });

  it('should display 404 code', () => {
    notFoundPage.navigateTo();
    expect(notFoundPage.getCodeText()).toEqual('404');
  });

  afterEach(() => {
    browserErrorsCheck();
  });
});
