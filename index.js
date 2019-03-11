function findMatching(drivers, expression) {
  return drivers.filter(function (name) { return name.match(new RegExp(expression, "i")); });
}

function fuzzyMatch(drivers, expression) {
  return drivers.filter(function (name) { 
    regex = new RegExp(`^${expression}`, "i");
    return regex.test(name);
  });
}

function matchName(drivers, expression) {
  return drivers.filter(function (object) {
    return object.name === expression;
  })
}