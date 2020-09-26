const assert = require('assert');
const sinon = require('sinon');

const formatter = require('../../../src/lib/gist/formatter');
const files = require('../../../src/lib/files');

describe('formatter', () => {
  describe('`formatGistFiles` method', () => {
    const gistFiles = ['gistFile1.js', 'gistFile2.js'];

    it('returns the correctly formatted object', () => {
      const getContentStub = sinon.stub(files, 'getFileContent');
      const firstReturn = 'console.log("hello test 1")';
      const secondReturn = 'console.log("hello test 2")';

      getContentStub.onCall(0).returns(firstReturn);
      getContentStub.onCall(1).returns(secondReturn);

      const formattedFiles = formatter.formatGistFiles(gistFiles);

      assert.strictEqual(formattedFiles[gistFiles[0]].content, firstReturn);
      assert.strictEqual(formattedFiles[gistFiles[1]].content, secondReturn);

      getContentStub.reset();
    });
  });
});
