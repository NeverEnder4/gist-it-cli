const inquirer = require('inquirer');

const validator = require('./validator');

const askGithubCredentials = () => {
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your GitHub username or e-mail address:',
      validate: validator.createInputValidation(
        'Please enter your GitHub username or e-mail address.'
      ),
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your GitHub password:',
      validate: validator.createInputValidation(
        'Please enter your GitHub password.'
      ),
    },
  ];

  return inquirer.prompt(questions);
};

const getTwoFactorAuthenticationCode = () => {
  const question = {
    name: 'twoFactorAuthenticationCode',
    type: 'input',
    message: 'Enter your two-factor authentication code:',
    validate: validator.createInputValidation(
      'Please enter your two-factor authentication code.'
    ),
  };

  return inquirer.prompt(question);
};

const askGistDetails = (fileList) => {
  const argv = require('minimist')(process.argv.slice(2));

  const questions = [
    {
      type: 'input',
      name: 'description',
      default: argv._[0] || null,
      message: 'Optionally enter a description of the gist:',
    },
    {
      type: 'checkbox',
      name: 'files',
      message: 'Select the files you wish to include in the gist:',
      choices: fileList,
      validate: validator.validateFiles,
    },
    {
      type: 'list',
      name: 'visibility',
      message: 'Public or private:',
      choices: ['public', 'private'],
      default: 'private',
    },
  ];

  return inquirer.prompt(questions);
};

module.exports = {
  askGithubCredentials,
  getTwoFactorAuthenticationCode,
  askGistDetails,
};
