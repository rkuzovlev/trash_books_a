import { TrashBooksPage } from './app.po';

describe('trash-books App', () => {
  let page: TrashBooksPage;

  beforeEach(() => {
    page = new TrashBooksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
