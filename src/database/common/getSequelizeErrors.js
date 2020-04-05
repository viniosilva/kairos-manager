module.exports = (error) => {
  const errors = error.errors
    ? error.errors.map(({ message }) => message).join(', ')
    : error.message;

  return errors || undefined;
};
