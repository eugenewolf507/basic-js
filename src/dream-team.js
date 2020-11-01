const CustomError = require("../extensions/custom-error");

const checkMembers = (acc, member) => {
  if (typeof member === "string") {
    member = member.replace(/ /g, "").match(/.{1}/);
    acc += member;
  }
  return acc;
};

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let result = members.reduce(checkMembers, "");
  result = result.toUpperCase().split("").sort().join("");
  return result;
};
