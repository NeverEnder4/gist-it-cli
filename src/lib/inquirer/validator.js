const validateInput = (failMessage, value) => {
  if (value.length) return true;
  else return failMessage;
};

const createInputValidation = (failMessage) => {
  const boundValidate = validateInput.bind(null, failMessage);
  return boundValidate;
};

const validateFiles = (value) => {
  if (value.length) return true;
  else return 'Please select at least one file.';
};

module.exports = {
  validateInput,
  createInputValidation,
  validateFiles,
};
