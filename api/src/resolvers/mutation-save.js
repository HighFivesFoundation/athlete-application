const saveMutationFieldSchema = require("./mutation-save-schema.js");

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
    !step.match(
      /Funding|Guidelines|InjuryInfo|ICU|Circumstances|PersonalInfo|User/
    ),
    `step "${step}" is not an ApplicationStep. This field case sensitive`
  );

  value = checkField(step, field, value);

  if (step === "User") {
    // This is crazy, mongodb won't let me $set = { [field]: value }
    //  but if I stringify and parse I can.
    let $set = JSON.parse(JSON.stringify({ [field]: value }));
    const { matchedCount, modifiedCount } = await db
      .collection("applicants")
      .updateOne({ _id: currentUser._id }, { $set });

    if (matchedCount && modifiedCount) {
      db.collection("applicants").updateOne(
        { _id: currentUser._id },
        { $set: { lastSave: new Date().toISOString() } }
      );

      return true;
    } else {
      return false;
    }
  }

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

    if (matchedCount && modifiedCount) {
      db.collection("applicants").updateOne(
        { _id: currentUser._id },
        { $set: { lastSave: new Date().toISOString() } }
      );

      return true;
    } else {
      return false;
    }
  }
};

module.exports = { save };
