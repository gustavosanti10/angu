import { LibreriaAngularPage } from './app.po';

describe('libreria-angular App', function() {
  let page: LibreriaAngularPage;

  beforeEach(() => {
    page = new LibreriaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
