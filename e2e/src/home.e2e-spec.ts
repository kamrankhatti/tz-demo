import { HomePage } from './home.po';
import { browser, logging } from 'protractor';

describe('TZ Exercise Demo App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage ();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toContain('Recent Transactions');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
