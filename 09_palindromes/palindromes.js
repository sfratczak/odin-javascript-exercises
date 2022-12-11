const palindromes = function (str) {
  const filteredArray = Array.from(str.toLowerCase()).filter((char) =>
    /[a-zA-Z]/.test(char)
  );
  const filteredString = filteredArray.join("");
  const reversedString = filteredArray.reverse().join("");

  return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
