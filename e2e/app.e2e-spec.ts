import { TalkAngularMaterialPage } from './app.po';

describe('talk-angular-material App', () => {
  let page: TalkAngularMaterialPage;

  beforeEach(() => {
    page = new TalkAngularMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
