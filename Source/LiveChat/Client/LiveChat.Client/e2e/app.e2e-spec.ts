import { IntrctPage } from './app.po';

describe('intrct App', () => {
  let page: IntrctPage;

  beforeEach(() => {
    page = new IntrctPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('intrct works!');
  });
});
