// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (nam) {
    return nam.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, let) {
  let lengthh = let.length
  return drivers.filter(function (name) {
    return name.slice(0,lengthh) === let
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (data) {
    return name.toLowerCase() === data.name.toLowerCase()
  })
}
