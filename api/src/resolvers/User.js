const application = (_, args, { currentUser }) => ({
  dateStarted: currentUser.dateCreated,
  dateOfInjury: currentUser.dateOfInjury,
  lastSave: currentUser.lastSave
});

module.exports = { application };
