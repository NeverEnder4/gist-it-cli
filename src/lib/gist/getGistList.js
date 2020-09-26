const CLI = require('clui');

const gh = require('../github');
const formatter = require('./formatter');

const Spinner = CLI.Spinner;

module.exports = async (flags) => {
  const github = gh.getInstance();

  const { per_page = 100, page = 1 } = flags;

  const data = { per_page, page };

  const status = new Spinner('Retrieving gists...');
  status.start();

  try {
    const response = await github.gists.list(data);
    const gistList = response.data;
    const formatted = formatter.formatGistList(gistList, flags);

    return formatted;
  } finally {
    status.stop();
  }
};
