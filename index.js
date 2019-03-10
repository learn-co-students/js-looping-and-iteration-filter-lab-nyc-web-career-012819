// Code your solution in this file

// function findMatching(drivers, string) {
//   return drivers.filter(function(driver) {
//     return driver.toLowerCase() === string.toLowerCase();
//   });
// }
// shorter way =>
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}
// ***************************************

// function fuzzyMatch(drivers, string) {
//   return drivers.filter(function(driver) {
//     return driver.substr(0, string.length) === string;
//   });
// }
// shorter way =>
function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.substr(0, string.length) === string);
  //  .slice(0, string.length) also works.
}
// ***************************************

// function matchName(drivers, string) {
//   return drivers.filter(function(driver) {
//     return driver.name.toLowerCase() === string.toLowerCase();
//   });
// }
// shorter way =>
function matchName(drivers, string) {
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}
// ***************************************
