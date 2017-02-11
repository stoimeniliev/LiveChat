import { INTRCTPage } from './app.po';

describe('intrct App', function() {
  let page: INTRCTPage;

  beforeEach(() => {
    page = new INTRCTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
