import { Test.ProjectPage } from './app.po';

describe('test.project App', () => {
  let page: Test.ProjectPage;

  beforeEach(() => {
    page = new Test.ProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
