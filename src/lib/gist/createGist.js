const CLI = require('clui');

const inquirer = require('../inquirer');
const gh = require('../github');
const files = require('../files');
const formatter = require('./formatter');

const Spinner = CLI.Spinner;

module.exports = async () => {
  const github = gh.getInstance();

  const fileList = files.getFileList();

  const answers = await inquirer.askGistDetails(fileList);

  const gistFiles = formatter.formatGistFiles(answers.files);

  const data = {
    description: answers.description,
    files: gistFiles,
    public: answers.visibility === 'public',
  };

  const status = new Spinner('Creating gist...');
  status.start();

  try {
    const response = await github.gists.create(data);
    return response.data.html_url;
  } finally {
    status.stop();
  }
};
