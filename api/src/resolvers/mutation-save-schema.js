module.exports = {
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
  },
  User: {
    dateOfInjury: "string"
  }
};
