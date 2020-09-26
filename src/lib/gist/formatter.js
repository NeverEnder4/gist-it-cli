const files = require('../files');

const formatGistFiles = (fileList) => {
  const filesObject = {};

  fileList.forEach((file) => {
    const content = files.getFileContent(file);
    filesObject[file] = { content };
  });

  return filesObject;
};

const filterGistsByVisibility = (gistList, flags) => {
  const { public = false, private = false } = flags;

  if (public && private) return gistList;
  else if (public) return gistList.filter((gist) => gist.public);
  else if (private) return gistList.filter((gist) => !gist.public);
};

const formatGistFields = (gistList) => {
  const formatted = gistList.map((gistData) => {
    const fileNames = Object.entries(gistData.files).map(
      (entry) => entry[1].filename
    );

    const formattedGist = {
      owner: gistData.owner.login,
      description: gistData.description,
      files: fileNames,
      public: gistData.public,
      comments: gistData.comments,
      id: gistData.id,
      html_url: gistData.html_url,
      created_at: gistData.created_at,
      updated_at: gistData.updated_at,
    };

    return formattedGist;
  });
  return formatted;
};

const formatGistList = (gistList, flags) => {
  if (gistList.length === 0) return [];

  const formattedGistFields = formatGistFields(gistList);
  const filteredByVisibility = filterGistsByVisibility(
    formattedGistFields,
    flags
  );

  return filteredByVisibility;
};

module.exports = {
  formatGistFiles,
  formatGistList,
};
