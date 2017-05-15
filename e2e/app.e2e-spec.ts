import { PrimeFaceDemoPage } from './app.po';

describe('prime-face-demo App', () => {
  let page: PrimeFaceDemoPage;

  beforeEach(() => {
    page = new PrimeFaceDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
