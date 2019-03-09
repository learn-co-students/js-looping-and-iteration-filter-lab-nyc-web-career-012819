// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letters) {
  let length = letters.length;
  return list.filter(function (driverLetters) {
    return driverLetters.slice(0, length) === letters;
  });
}

function matchName(list, string) {
  return list.filter(function (matchName) {
    return matchName.name.toLowerCase() === string.toLowerCase();
  });
}
