const fs = require("fs");
const { glob } = require("glob");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  getFileList: () => {
    return glob.sync("**/**", { nodir: true, ignore: "node_modules/**/*", dot: true });
  },

  getFileContent: (filePath) => {
    return fs.readFileSync(filePath, "utf8");
  },
};
