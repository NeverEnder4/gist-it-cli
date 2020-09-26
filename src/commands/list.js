const { Command, flags } = require('@oclif/command');

class ListCommand extends Command {
  async run() {
    const github = require('../lib/github');
    const gist = require('../lib/gist');
    const logger = require('../lib/logger');

    const { flags } = this.parse(ListCommand);

    try {
      // Retrieve & Set Auth Token
      let token = github.getStoredGithubToken();
      if (!token) {
        logger.clearAll();
        logger.logTitle();
        token = await github.getPersonalAccessToken();
      }
      github.githubAuth(token);

      // Get list of gists
      const gistList = await gist.getGistList(flags);

      if (gistList.length) {
        logger.logGistList(gistList);
        logger.logPagination(flags);
      } else logger.logCustomError('No gists were found');
    } catch (err) {
      logger.logError(err);
    }
  }
}

ListCommand.description = `Prints a list of your GitHub gists to the console.
...

`;

ListCommand.flags = {
  public: flags.boolean({ char: 'u', description: 'List public gists' }),
  private: flags.boolean({ char: 'r', description: 'List private gists' }),
  per_page: flags.string({
    char: 'q',
    description: 'Number of gists to return per page (max 100)',
  }),
  page: flags.string({ char: 'p', description: 'Page number' }),
};

module.exports = ListCommand;
