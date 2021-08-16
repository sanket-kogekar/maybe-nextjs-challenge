import airports from "../data/airports.json";
import Airport from "../types/airport";
import Country from "../types/country";
import City from "../types/city";
import AirportName from "../types/airport-name";
import AirportIata from "../types/airport-iata";

export const findAirportByIata = async (
  iata: string
): Promise<Airport | undefined> => {
  return airports.find((airport) => airport.iata === iata.toUpperCase());
};

const removeDuplicates = (originalArray: any, objKey: string) => {
  var trimmedArray = [];
  var values = [];
  var value;
  for (var i = 0; i < originalArray.length; i++) {
    value = originalArray[i][objKey];
    if (values.indexOf(value) === -1) {
      trimmedArray.push(originalArray[i]);
      values.push(value);
    }
  }
  return trimmedArray;
};

const sortAlphabetically = (originalArray: any) => {
  return originalArray.sort(function (a, b) {
    var firstItem = a.name.toUpperCase();
    var secondItem = b.name.toUpperCase();
    return firstItem < secondItem ? -1 : firstItem > secondItem ? 1 : 0;
  });
};

export const allAirports = async (filters): Promise<Airport[]> => {
  const { name, iata, city, country } = filters;
  let filteredAirports = [];
  if (name || iata || city || country) {
    filteredAirports = airports.filter((airport) => {
      if (name && name != airport.name) {
        return false;
      }
      if (iata && iata != airport.iata) {
        return false;
      }
      if (country && country != airport.country) {
        return false;
      }
      if (city && city != airport.city) {
        return false;
      }
      return true;
    });
    return sortAlphabetically(filteredAirports);
  } else {
    return sortAlphabetically(airports);
  }
};

export const getAirportNames = async (): Promise<AirportName[]> => {
  let names = [];
  airports.map((airport) => {
    names.push({ name: airport.name });
  });
  names = removeDuplicates(names, "name");
  return sortAlphabetically(names);
};

export const getAirportIataList = async (): Promise<AirportName[]> => {
  let airportIataList = [];
  airports.map((airport) => {
    airportIataList.push({ name: airport.iata });
  });
  return sortAlphabetically(airportIataList);
};

export const getCountries = async (): Promise<AirportName[]> => {
  let countries = [];
  airports.map((airport) => {
    countries.push({ name: airport.country });
  });
  countries = removeDuplicates(countries, "name");
  return sortAlphabetically(countries);
};

export const getCities = async (): Promise<AirportName[]> => {
  let cities = [];
  airports.map((airport) => {
    cities.push({ name: airport.city, country: airport.country });
  });
  cities = removeDuplicates(cities, "name");
  return sortAlphabetically(cities);
};
