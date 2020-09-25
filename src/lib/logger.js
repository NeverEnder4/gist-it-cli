const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const boxen = require('boxen');

const logCreateGistSuccess = (url) => {
  console.log(
    boxen(
      `
Gist successfully created!

View your gist at:

${chalk.green(`${url}`)}
  `,
      {
        padding: 1,
        margin: 1,
        borderColor: 'green',
        align: 'center',
      }
    )
  );
};

const logGistIt = () => {
  console.log(
    chalk.yellow(figlet.textSync('Gist-It', { horizontalLayout: 'full' }))
  );
};

const logError = () => {
  switch (err.status) {
    case 401:
      console.log(
        chalk.red(
          "Couldn't log you in. Please provide correct credentials/token."
        )
      );
      break;
    case 422:
      console.log(
        err,
        chalk.red('There is already a token with the same name')
      );
      break;
    default:
      console.log(chalk.red(err));
  }
};

const clearAll = () => {
  clear();
};

module.exports = {
  logCreateGistSuccess,
  logGistIt,
  logError,
  clearAll,
};
