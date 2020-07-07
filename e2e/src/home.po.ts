import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHeadingText(): Promise<string> {
    return element(by.css('.wrapper .wrapper__heading')).getText() as Promise<string>;
  }
}
