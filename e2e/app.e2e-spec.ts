import { NewOnePage } from './app.po';

describe('new-one App', () => {
  let page: NewOnePage;

  beforeEach(() => {
    page = new NewOnePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
