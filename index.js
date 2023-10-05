// Code your solution here
const drivers  = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const matchingDrivers = findMatching(drivers, 'bobby');


// function fuzzyMatch(drivers, name){
//     return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase())
//  const fuzzyMatch = fuzzyMatch(drivers, 'Sammy',  'Sarah',  'Sally');
// }

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(name.toLowerCase())
    );
  }
 
    function matchName(drivers, name) {
        return drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());
      }
         

