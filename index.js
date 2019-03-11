// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (nam) {return nam.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(drivers, blet) {
  return drivers.filter(function (name) {
    return blet[0] === name[0]
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (data) {
    return name === data.name
  })
}
