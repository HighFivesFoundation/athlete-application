const _steps = [
  { type: "Funding", url: "/funding" },
  { type: "Guidelines", url: "/guidelines" },
  { type: "InjuryInfo", url: "/injury-info" },
  { type: "ICU", url: "/icu" },
  { type: "Circumstances" },
  { type: "PersonalInfo" }
];

const started = async ({ type }, args, { db, currentUser }) => {
  const record = await db.collection(type).findOne({ userId: currentUser._id });
  return record ? true : false;
};

const steps = (_, args, { currentUser }) => {
  return _steps;
};

const Funding = {
  started
};

const Guidelines = {
  started
};

const InjuryInfo = {
  started
};

const ICU = {
  started
};

const Circumstances = {
  started
};

const PersonalInfo = {
  started
};

const ApplicationStep = {
  __resolveType: step => step.type
};

const Application = {
  steps
};

module.exports = {
  Application,
  ApplicationStep,
  Funding,
  Guidelines,
  InjuryInfo,
  ICU,
  Circumstances,
  PersonalInfo
};
