const removeFromArray = function (array) {
  for (let argsIndex = 1; argsIndex <= arguments.length; argsIndex++) {
    for (let arrIndex = 0; arrIndex < array.length; arrIndex++) {
      if (array[arrIndex] === arguments[argsIndex]) {
        array.splice(arrIndex, 1);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
