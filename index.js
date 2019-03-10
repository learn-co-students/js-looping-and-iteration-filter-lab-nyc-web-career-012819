// Code your solution in this file

function findMatching(drivers, string) {
  let filtered = drivers.filter(function (name) { return name.toLowerCase() === string.toLowerCase() ;});
  // let filtered = drivers.filter(name => name.toLowerCase() === dname.toLowerCase());
  return filtered;
}

function fuzzyMatch(drivers, string) {
  let filtered = drivers.filter(function (name) { return name.charAt(0) === string.charAt(0) ; });
  return filtered;
}

function matchName(drivers, string) {
  let filtered = drivers.filter(function (ob) { return ob.name === string ;});
  return filtered;
}
