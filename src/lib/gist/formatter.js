const files = require('../files');

const formatGistFiles = (fileList) => {
  const filesObject = {};

  fileList.forEach((file) => {
    const content = files.getFileContent(file);
    filesObject[file] = { content };
  });

  return filesObject;
};

module.exports = {
  formatGistFiles,
};
