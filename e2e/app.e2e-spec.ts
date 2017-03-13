import { ScoreappPage } from './app.po';

describe('scoreapp App', () => {
  let page: ScoreappPage;

  beforeEach(() => {
    page = new ScoreappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
