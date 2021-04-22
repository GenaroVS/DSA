/*
Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.
 */

/**
 *
 * @param {string[][2]} flights
 * @param {string} start
 * @return {string[]}
 */
const getItinerary = (flights, start) => {
  var flightMap = {};

  for (let [origin, dest] of flights) {
    flightMap[origin] ? flightMap[origin].push(dest) : flightMap[origin] = [dest];
  }

  function traverse(itinerary) {
    if (itinerary.length === flights.length + 1) {
      return [itinerary.slice()];
    }

    var origin = itinerary[itinerary.length - 1];
    if (!flightMap[origin]) return [];
    var potentials = [];


    for (var i = 0; i < flightMap[origin].length; i++) {
      var dest = flightMap[origin][i];
      if (dest) {
        flightMap[origin][i] = false;
        itinerary.push(dest);
        Array.prototype.push.apply(potentials, traverse(itinerary));
        flightMap[origin][i] = dest;
        itinerary.pop();
      }
    }

    return potentials;
  }


  var itineraries = traverse([start]);
  return itineraries.length ? itineraries[0] : null;
};

var flights1 = [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']];
var flights2 = [['A','C'],['A','B'],['B','C'],['C','A']];
console.log(getItinerary(flights1, 'YUL'));
console.log(getItinerary(flights2, 'A'))