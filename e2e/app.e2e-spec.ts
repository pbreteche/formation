import { FormationPage } from './app.po';

describe('formation App', () => {
  let page: FormationPage;

  beforeEach(() => {
    page = new FormationPage();
  });

  it('should have 4 links', () => {
    page.navigateTo();
    console.log(page.getLinkList());
    expect(page.getLinkList().count()).toEqual(4);
  });
});
