// Code your solution in this file

function findMatching(drivers, string){
  let driver = drivers.filter(driver=> driver.toLowerCase()===string.toLowerCase())
  return driver
}

function fuzzyMatch(drivers, string){
  const i = string.length
  let driver = drivers.filter(driver=> driver.slice(0, i)===string)
  return driver;
}

function matchName(drivers, string){
  let driver = drivers.filter(driver=> driver["name"]===string)
  return driver;
}
