const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const boxen = require('boxen');
const cTable = require('console.table');

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

const logGistList = (gistList) => {
  console.log('\n\n');
  const table = cTable.getTable(gistList);
  console.log(chalk.green(table));
};

const logPagination = (data) => {
  const { per_page, page } = data;
  console.log(
    chalk.yellow(`
current page: ${page}
results per page: ${per_page}
 `)
  );
};

const logTitle = () => {
  console.log(
    chalk.yellow(figlet.textSync('Gist-It', { horizontalLayout: 'full' }))
  );
};

const logCustomError = (message) => {
  console.log(chalk.red(message));
};

const logError = (err) => {
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
  logTitle,
  logError,
  logCustomError,
  logGistList,
  clearAll,
  logPagination,
};
