import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
<<<<<<< HEAD
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Welcome to Project3!');
=======
=======
    page.navigateTo();-
>>>>>>> 5255b9bb8facc55978f9fa9101cbefcb7424a8b6
    expect(page.getTitleText()).toEqual('Welcome to project3!');
>>>>>>> 619bc6c63e4d2cd61863d9423103f76c2eac4ba7
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
