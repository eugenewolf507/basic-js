const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  const longArr = arr.reduce((acc, item) => (acc = [...acc, ...item]), []);
  console.log(longArr);
  const result = longArr.reduce((acc, item) => {
    if (item === "^^") {
      acc = acc + 1;
    }
    return acc;
  }, 0);
  return result;
};
