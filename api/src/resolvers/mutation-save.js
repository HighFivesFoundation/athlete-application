const { ObjectID } = require("mongodb");

const saveMutationFieldSchema = {
  Funding: {
    category: /HEALING_NETWORK|LIVING_EXPENSES|ADAPTIVE_EQUIPMENT|WINTER_EQUIPMENT|INSURANCE|PROGRAMS|HEALTH|TRAVEL/,
    resources: "string",
    amount: "number"
  },
  Guidelines: {
    usOrCanadaResident: "boolean",
    degenerativeDisease: "boolean",
    healthCoverage: "boolean",
    returnToSports: "boolean"
  },
  InjuryInfo: {
    injuryType: /SPINAL_CORD|TBI|AMPUTATION|OTHER/,
    injuryLevel: /C1C7|T1T6|T7T12|L1S1/,
    spinalInjuryType: /COMPLETEPARA|INCOMPLETEPARA|COMPLETETETRA|INCOMPLETETETRA/,
    injuryCause: /WINTERACTIONSPORT|SUMMERACTIONSPORT|MOTORSPORT|MILITARYCOMBAT|CARACCIDENT|OTHER/,
    injuryDescription: "string",
    recoveryGoals: "string",
    reachingRecoveryGoals: "string"
  },
  ICU: {
    daysInICU: "number",
    nameOfHospital: "string",
    daysInInpatientRehab: "number",
    nameOfRehabHospital: "string"
  },
  Circumstances: {
    participatingInSport: "boolean"
  },
  PersonalInfo: {
    paidProfessional: "boolean",
    socialSecurity: "boolean",
    adjustedGrossIncome: "number",
    raceEthnicity: [
      "BLACK",
      "ASIAN",
      "CAUCASIAN",
      "LATINO",
      "MIDDLE_EASTERN",
      "NATIVE_AMERICAN",
      "PACIFIC_ISLANDER",
      "TWO_OR_MORE",
      "OTHER"
    ]
  }
};

const checkArg = (test, message) => {
  if (test) {
    throw new Error(message);
  }
};

const checkField = (step, field, value) => {
  const availableFields = saveMutationFieldSchema[step];
  let retVal = value;

  if (!availableFields[field]) {
    throw new Error(
      `The step "${step}" does not contain a field for "${field}"`
    );
  }

  if (typeof availableFields[field] === "object") {
    if (!value.match(availableFields[field])) {
      throw new Error(
        `The value "${value}" does not match available enum values`
      );
    }
  } else if (Array.isArray(availableFields[field])) {
    if (!availableFields[field].some(enumVal => enumValue === value)) {
      throw new Error(
        `The value "${value}" is not within [${availableFields[field].join(
          ","
        )}]`
      );
    }
  } else if (availableFields[field] === "number") {
    if (isNaN(parseInt(value))) {
      throw new Error(`"${value}" is not a number`);
    }
  } else if (availableFields[field] === "boolean") {
    if (!value.match(/true|false/)) {
      throw new Error(`${value} is not a valid boolean`);
    }
    retVal = value === "true";
  } else {
    if (!value) {
      throw new Error(`a value is required`);
    }
  }
  return retVal;
};

const save = async (_, { step, field, value }, { db, currentUser }) => {
  checkArg(!currentUser, `Authorization required to save data`);
  checkArg(
    !step.match(/Funding|Guidelines|InjuryInfo|ICU|Circumstances|PersonalInfo/),
    `step "${step}" is not an ApplicationStep. This field case sensitive`
  );
  value = checkField(step, field, value);

  let record = await db.collection(step).findOne({ userId: currentUser._id });

  if (!record) {
    await db.collection(step).insertOne({
      userId: currentUser._id,
      [field]: value
    });
  } else {
    // This is crazy, mongodb won't let me $set = { [field]: value }
    //  but if I stringify and parse I can.
    let $set = JSON.parse(JSON.stringify({ [field]: value }));

    const { matchedCount, modifiedCount } = await db
      .collection(step)
      .updateOne({ userId: currentUser._id }, { $set });

    return matchedCount && modifiedCount ? true : false;
  }
};

module.exports = { save };
