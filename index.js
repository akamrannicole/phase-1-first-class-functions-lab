// Code your solution in this file!
// Define returnFirstTwoDrivers function
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Define returnLastTwoDrivers function
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Define selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define createFareMultiplier function
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
  // Define fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Define fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // Define selectDifferentDrivers function
  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  
