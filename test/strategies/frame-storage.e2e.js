'use strict';

const {expect} = require('chai');
const {NOT_FOUND} = require('../../src');
const {browser, element, by} = require('protractor');

const switchToIFrame = () => browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
const switchToMainFrame = () => browser.switchTo().frame(null);

describe('frame-storage-strategy', () => {
  beforeEach(async () => {
    await browser.get(`http://localhost:3000`);
    await browser.executeScript(`
    LocalStorageStrategy = DataCapsuleTools.LocalStorageStrategy;
    FrameStorageListener = DataCapsuleTools.FrameStorageListener;
    listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start((source, origin, token) => token === 'secret');
    `);

    await switchToIFrame();

    await browser.executeScript(`
    DataCapsule = DataCapsuleTools.DataCapsule;
    FrameStorageStrategy = DataCapsuleTools.FrameStorageStrategy;
    capsule = new DataCapsule({strategy: new FrameStorageStrategy(window.top, '*', 'secret')});
    `);
  });

  afterEach(async () => {
    await switchToMainFrame();
    await browser.executeScript(`localStorage.clear();`);
  });

  it('should store and retrieve information', async () => {
    await browser.executeScript(`
    capsule.setItem('hey', 'ho', {namespace: 'wix'})
      .then(() => capsule.getItem('hey', {namespace: 'wix'}))
      .then((result) => {
        const text = window.document.createTextNode(result);
        window.document.querySelector('#result').appendChild(text);
      })
      .catch((e) => {
        const text = window.document.createTextNode('FAILURE');
        window.document.querySelector('#result').appendChild(text);
      });
    `);
    const result = await browser.findElement(by.id('result')).getText();

    expect(result).to.equal('ho');
  });

  it('should remove items (and handle rejections)', async () => {
    await browser.executeScript(`
    capsule.setItem('hey', 'ho', {namespace: 'wix'})
      .then(() => capsule.removeItem('hey', {namespace: 'wix'}))
      .then(() => capsule.getItem('hey', {namespace: 'wix'}))
      .then((result) => {
        const text = window.document.createTextNode(result);
        window.document.querySelector('#result').appendChild(text);
      })
      .catch((e) => {
        const text = window.document.createTextNode(e);
        window.document.querySelector('#result').appendChild(text);
      });
    `);
    const result = await browser.findElement(by.id('result')).getText();
    expect(result).to.equal(NOT_FOUND.message);
  });

  it('should get all items', async () => {
    await browser.executeScript(`
    capsule.setItem('hey', 'ho', {namespace: 'wix'})
      .then(() => capsule.getAllItems({namespace: 'wix'}))
      .then((result) => {
        const text = window.document.createTextNode(JSON.stringify(result));
        window.document.querySelector('#result').appendChild(text);
      })
      .catch((e) => {
        const text = window.document.createTextNode(e);
        window.document.querySelector('#result').appendChild(text);
      });
    `);
    const result = await browser.findElement(by.id('result')).getText();
    expect(result).to.equal('{"hey":"ho"}');
  });

  it('should stop the listener when calling the 🛑 method, and therefore the message won\'t return', async () => {
    await switchToMainFrame();
    await browser.executeScript(`listener.stop()`);
    await switchToIFrame();
    await browser.executeScript(`
    capsule.setItem('hey', 'ho', {namespace: 'wix'})
      .then(() => capsule.getItem('hey', {namespace: 'wix'}))
      .then((result) => {
        const text = window.document.createTextNode(result);
        window.document.querySelector('#result').appendChild(text);
      })
      .catch((e) => {
        const text = window.document.createTextNode('FAILURE');
        window.document.querySelector('#result').appendChild(text);
      });
    `);
    const result = await browser.findElement(by.id('result')).getText();

    expect(result).to.equal('');
  });
});

describe('frame-storage-strategy when the token is differenet', () => {
  beforeEach(async () => {
    await browser.get(`http://localhost:3000`);
    await browser.executeScript(`
    LocalStorageStrategy = DataCapsuleTools.LocalStorageStrategy;
    FrameStorageListener = DataCapsuleTools.FrameStorageListener;
    listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start((source, origin, token) => token === 'secret');
    `);

    await switchToIFrame();

    await browser.executeScript(`
    DataCapsule = DataCapsuleTools.DataCapsule;
    FrameStorageStrategy = DataCapsuleTools.FrameStorageStrategy;
    capsule = new DataCapsule({strategy: new FrameStorageStrategy(window.top, '*', 'different-then-secret')});
    `);
  });

  afterEach(async () => {
    await switchToMainFrame();
    await browser.executeScript(`localStorage.clear();`);
  });

  it('should send a not authorized message when the message was not authorized by the listener verifier', async () => {
    // notice that the token in the capsule is different then the token in the listener
    await browser.executeScript(`
    capsule.setItem('hey', 'ho', {namespace: 'wix'})
      .then(() => {
        const text = window.document.createTextNode('SUCCESS');
        window.document.querySelector('#result').appendChild(text);
      })
      .catch((e) => {
        const text = window.document.createTextNode(e);
        window.document.querySelector('#result').appendChild(text);
      });
    `);
    const result = await browser.findElement(by.id('result')).getText();

    expect(result).to.equal('Error: message was not authorized');
  });
});

describe('frame-storage-strategy when there is a interceptor', () => {
  beforeEach(async () => {
    await browser.get(`http://localhost:3000`);
    await browser.executeScript(`
    LocalStorageStrategy = DataCapsuleTools.LocalStorageStrategy;
    FrameStorageListener = DataCapsuleTools.FrameStorageListener;
    listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start(
      (source, origin, token) => token === 'secret',
      (options, source, origin, token) => {
          options.namespace = 'custom-space';
          options.scope = 'custom-scope';
          return options;
        }
  );
    `);

    await switchToIFrame();

    await browser.executeScript(`
    DataCapsule = DataCapsuleTools.DataCapsule;
    FrameStorageStrategy = DataCapsuleTools.FrameStorageStrategy;
    capsule = new DataCapsule({strategy: new FrameStorageStrategy(window.top, '*', 'secret')});
    `);
  });

  afterEach(async () => {
    await switchToMainFrame();
    await browser.executeScript(`localStorage.clear();`);
  });

  it('should save the item on a different scope and namespace as described in the listener', async () => {

    await browser.executeScript(`
    capsule.setItem('hey', 'ho', {namespace: 'wix'})
      .then(() => capsule.getItem('hey', {namespace: 'custom-space', scope: 'custom-scope'}))
      .then((result) => {
        const text = window.document.createTextNode(result);
        window.document.querySelector('#result').appendChild(text);
      })
      .catch((e) => {
        const text = window.document.createTextNode('FAILURE');
        window.document.querySelector('#result').appendChild(text);
      });
    `);

    const result = await browser.findElement(by.id('result')).getText();
    expect(result).to.equal('ho');

    await switchToMainFrame();

    const a = await browser.executeScript(`return localStorage.getItem('capsule|custom-space|custom-scope#hey')`);
    expect(JSON.parse(a).value).to.equal('ho');
  });
});

describe('frame-storage-strategy with custom host strategy', () => {
  beforeEach(async () => {
    await browser.get(`http://localhost:3000`);
    await browser.executeScript(`
    class MyStorageStrategy extends DataCapsuleTools.BaseStorage {
      setItem() {
        return Promise.reject(new Error('byebye'));
      }
      getItem() {
        //
      }
      removeItem() {
        //
      }
      getAllItems() {
        //
      }
    }

    FrameStorageListener = DataCapsuleTools.FrameStorageListener;
    listener = new FrameStorageListener(new MyStorageStrategy());
    listener.start((source, origin, token) => token === 'secret');
    `);

    await switchToIFrame();
    await browser.executeScript(`
    DataCapsule = DataCapsuleTools.DataCapsule;
    FrameStorageStrategy = DataCapsuleTools.FrameStorageStrategy;
    capsule = new DataCapsule({strategy: new FrameStorageStrategy(window.top, '*', 'secret')});
    `);
  });

  afterEach(async () => {
    await switchToMainFrame();
    await browser.executeScript(`localStorage.clear();`);
  });

  it('should allow for custom errors to be transmitted over the wire', async () => {
    await browser.executeScript(`
    capsule.setItem('hey', 'ho', {namespace: 'wix'})
      .then(() => capsule.getItem('hey', {namespace: 'wix'}))
      .then((result) => {
        const text = window.document.createTextNode('SUCCESS');
        window.document.querySelector('#result').appendChild(text);
      })
      .catch((e) => {
        const text = window.document.createTextNode(e);
        window.document.querySelector('#result').appendChild(text);
      });
    `);
    const result = await browser.findElement(by.id('result')).getText();
    expect(result).to.equal('byebye');
  });
});
