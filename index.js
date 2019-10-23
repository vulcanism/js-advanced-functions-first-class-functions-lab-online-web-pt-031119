const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n) {
  return function(fare) {
    return fare * n;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
}
