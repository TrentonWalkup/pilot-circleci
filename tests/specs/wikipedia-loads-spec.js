require('chai/register-expect');

describe('As a user', ()=> {
  it('I can go to the wikipedia page', ()=> {
    browser.url('https://www.wikipedia.org/');
    browser.pause(500);
    expect(browser.getUrl()).to.equal('https://www.wikipedia.org/');
  });
});