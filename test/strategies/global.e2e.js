import { expect } from 'chai';
import { browser, by } from 'protractor';

describe('global', () => {
  beforeEach(async () => {
    await browser.get(`http://localhost:3000/global.html`);
    await browser.executeScript(`
      capsule = DataCapsuleTools.LocalStorageCapsule({namespace: 'wix'});
    `);
  });

  afterEach(async () => {
    await browser.executeScript(`localStorage.clear();`);
  });

  it('works with global exposure', async () => {
    await browser.executeScript(`
      capsule.setItem('someItem', 123, {namespace: 'wix'})
        .then(() => capsule.getItem('someItem', {namespace: 'wix'}))
        .then((result) => {
          const text = window.document.createTextNode(result);
          window.document.querySelector('#result').appendChild(text);
        })
    `);

    const result = await browser.findElement(by.id('result')).getText();

    expect(result).to.equal('123');
  });
});
