const { Command } = require('@oclif/command');

class CreateCommand extends Command {
  async run() {
    const github = require('../lib/github');
    const gist = require('../lib/gist');
    const logger = require('../lib/logger');

    logger.clearAll();
    logger.logTitle();

    try {
      // Retrieve & Set Auth Token
      let token = github.getStoredGithubToken();
      if (!token) {
        logger.clearAll();
        logger.logTitle();
        token = await github.getPersonalAccessToken();
      }
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
