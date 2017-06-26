import { FormationPage } from './app.po';

describe('formation App', () => {
  let page: FormationPage;

  beforeEach(() => {
    page = new FormationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
