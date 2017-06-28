import { browser, by, element } from 'protractor';

export class FormationPage {
  navigateTo() {
    return browser.get('/');
  }

  getLinkList() {
    return element.all(by.css('app-root ul a'));
  }
}
