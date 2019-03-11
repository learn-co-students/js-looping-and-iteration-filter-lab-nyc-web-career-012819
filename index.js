// Code your solution in this file

function findMatching(drivers, name) {
  const newList = drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
  return newList
}

function fuzzyMatch(drivers, name) {
  const newList = drivers.filter(driver => driver[0] == name[0])
  return newList
}

function matchName(drivers, string) {
  const newList = drivers.filter(driver => driver.name == string)
  return newList
}
