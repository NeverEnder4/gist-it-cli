const { Command } = require('@oclif/command');

class CreateCommand extends Command {
  async run() {
    const github = require('../lib/github');
    const gist = require('../lib/gist');
    const logger = require('../lib/logger');

    logger.clearAll();
    logger.logGistIt();

    const getGitHubToken = async () => {
      let token = github.getStoredGithubToken();
      if (token) return token;

      token = await github.getPersonalAccessToken();
      return token;
    };

    try {
      // Retrieve & Set Auth Token
      const token = await getGitHubToken();
      github.githubAuth(token);

      // Create gist or return error
      const url = await gist.createGist();
      logger.logCreateGistSuccess(url);
    } catch (err) {
      logger.logError(err);
    }
  }
}

CreateCommand.description = `Create a GitHub gist from files in your current working directory.
...
Extra documentation goes here
`;

module.exports = CreateCommand;
