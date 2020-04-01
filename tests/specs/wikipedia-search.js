require('chai/register-expect');

describe('As a user', ()=> {
  it('I can search for something on the wikipedia page', ()=> {
    browser.url('https://www.wikipedia.org/');
    browser.pause(500);
    let searchInput = $('#searchInput');
    searchInput.setValue('kittens');
    let searchButton = $('#search-form > fieldset > button > i');
    searchButton.click();
    let header = $('#firstHeading');
    expect(header.getText()).to.equal('Kitten');
  });
});