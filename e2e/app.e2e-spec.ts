import { TestowyPage } from './app.po';

describe('testowy App', () => {
  let page: TestowyPage;

  beforeEach(() => {
    page = new TestowyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
