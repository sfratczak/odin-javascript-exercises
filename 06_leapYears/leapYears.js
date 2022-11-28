const leapYears = function (year) {
  // divisible by 400 or (divisible by 4 but not 100)
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
