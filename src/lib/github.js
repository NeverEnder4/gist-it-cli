const CLI = require('clui');
const Configstore = require('configstore');
const { Octokit } = require('@octokit/rest');
const { createBasicAuth } = require('@octokit/auth-basic');

const inquirer = require('./inquirer');

const Spinner = CLI.Spinner;
const conf = new Configstore('gist-it-store');

let octokit;

const getInstance = () => {
  return octokit;
};

const getStoredGithubToken = () => {
  return conf.get('github.token');
};

const getPersonalAccessToken = async () => {
  const credentials = await inquirer.askGithubCredentials();
  const status = new Spinner('Authenticating, please wait...');

  status.start();

  const auth = createBasicAuth({
    username: credentials.username,
    password: credentials.password,
    async on2Fa() {
      status.stop();

      const res = await inquirer.getTwoFactorAuthenticationCode();
      status.start();

      return res.twoFactorAuthenticationCode;
    },
    token: {
      scopes: [
        'user',
        'public_repo',
        'repo',
        'repo:status',
        'gist',
        'delete_repo',
      ],
      note: 'gist-it, the comand-line tool for managing your gists',
    },
  });

  try {
    const res = await auth();

    if (res.token) {
      conf.set('github.token', res.token);
      return res.token;
    } else throw new Error('GitHub token was not found in the response');
  } finally {
    status.stop();
  }
};

githubAuth = (token) => {
  octokit = new Octokit({ auth: token });
};

module.exports = {
  getInstance,
  getStoredGithubToken,
  getPersonalAccessToken,
  githubAuth,
};
