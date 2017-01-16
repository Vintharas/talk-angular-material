import { TalkAngularMaterialPage } from './app.po';

describe('talk-angular-material App', function() {
  let page: TalkAngularMaterialPage;

  beforeEach(() => {
    page = new TalkAngularMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
