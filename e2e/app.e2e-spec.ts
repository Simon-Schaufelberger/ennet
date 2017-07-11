import { EnnetPage } from './app.po';

describe('ennet App', function() {
  let page: EnnetPage;

  beforeEach(() => {
    page = new EnnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
