import { AngularClientFilmPage } from './app.po';

describe('angular-client-film App', () => {
  let page: AngularClientFilmPage;

  beforeEach(() => {
    page = new AngularClientFilmPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
