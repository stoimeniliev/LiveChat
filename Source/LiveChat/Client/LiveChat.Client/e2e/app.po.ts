import { browser, element, by } from 'protractor';

export class IntrctPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('intrct-root h1')).getText();
  }
}
