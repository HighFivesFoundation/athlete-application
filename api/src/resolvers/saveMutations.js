const saveGeneralInfo = async (_, { input }, { currentUser, db }) => {
  if (!currentUser) {
    throw new Error("Authentication required to save general information");
  }

  let { ok, value: user } = await db.collection("applicants").findOneAndUpdate(
    { _id: currentUser._id },
    {
      $set: {
        ...input,
        dateModified: new Date().toISOString()
      }
    }
  );

  const saved = ok ? true : false;
  const message = ok
    ? `General info for ${user.firstName} ${user.lastName} updated`
    : `General info for ${currentUser.firstName} ${
        currentUser.lastName
      } has not been updated`;

  const timestamp = ok ? user.dateModified : null;

  const step = null;

  return {
    saved,
    message,
    timestamp,
    step
  };
};

const saveFunding = (_, { input }) => {
  return {
    saved: false,
    message: "This mutation has not been implemented"
  };
};

const saveGuidelines = (_, { input }) => {
  return {
    saved: false,
    message: "This mutation has not been implemented"
  };
};

const saveInjuryInfo = (_, { input }) => {
  return {
    saved: false,
    message: "This mutation has not been implemented"
  };
};

const saveICU = (_, { input }) => {
  return {
    saved: false,
    message: "This mutation has not been implemented"
  };
};

const saveCircumstances = (_, { input }) => {
  return {
    saved: false,
    message: "This mutation has not been implemented"
  };
};

const savePersonalInfo = (_, { input }) => {
  return {
    saved: false,
    message: "This mutation has not been implemented"
  };
};

module.exports = {
  saveGeneralInfo,
  saveFunding,
  saveGuidelines,
  saveInjuryInfo,
  saveICU,
  saveCircumstances,
  savePersonalInfo
};
