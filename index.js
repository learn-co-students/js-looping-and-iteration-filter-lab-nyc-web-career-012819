// Code your solution in this file
function findMatching(drivers, name)
{
  return drivers.filter(function(driver)
  {
    return driver.toLowerCase() === name.toLowerCase();
  });
}
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function fuzzyMatch(drivers, name)
{
  return drivers.filter(function(driver)
  {
    return driver.toLowerCase().slice(0,2) === name.toLowerCase().slice(0,2);
  });
}

function matchName(drivers, name)
{
  return drivers.filter(function(driver)
  {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];
