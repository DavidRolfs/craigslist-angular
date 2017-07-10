import { CraigslistPage } from './app.po';

describe('craigslist App', () => {
  let page: CraigslistPage;

  beforeEach(() => {
    page = new CraigslistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
