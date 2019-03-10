// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter( function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter( function(driverName) {
    return driverName.toLowerCase().slice(0,2) === name.toLowerCase().slice(0,2);
  });
}

function matchName(drivers, name) {
  return drivers.filter( function(driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}
