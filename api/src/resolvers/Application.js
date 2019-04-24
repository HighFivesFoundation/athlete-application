const dateStarted = (_, args, { currentUser }) => currentUser.dateCreated;

module.exports = { dateStarted };
