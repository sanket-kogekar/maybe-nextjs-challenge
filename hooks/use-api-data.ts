import axios from "axios";
import { useEffect, useState } from "react";

export const useApiData = <T>(
  path: string,
  defaultValue: any,
  filters: any
): T => {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    axios
      .get<T>(path)
      .catch((err) => err.response)
      .then((response) => {
        setData(response.data);
      });
  }, []);


  return data;
};

export const getNames = <T>(path: string, defaultValue: any): T => {
  const [names, setNames] = useState<T>(defaultValue);

  useEffect(() => {
    axios
      .get<T>(path)
      .catch((err) => err.response)
      .then((response) => {
        setNames(response.data);
      });
  }, []);

  return names;
};

export const getIataList = <T>(path: string, defaultValue: any): T => {
  const [airportIataList, setAirportIataList] = useState<T>(defaultValue);

  useEffect(() => {
    axios
      .get<T>(path)
      .catch((err) => err.response)
      .then((response) => {
        setAirportIataList(response.data);
      });
  }, []);

  return airportIataList;
};

export const getCountries = <T>(path: string, defaultValue: any): T => {
  const [countries, setCountries] = useState<T>(defaultValue);

  useEffect(() => {
    axios
      .get<T>(path)
      .catch((err) => err.response)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return countries;
};

export const getCities = <T>(
  path: string,
  defaultValue: any,
  country: any
): T => {
  const [cities, setCities] = useState<T>(defaultValue);

  useEffect(() => {
    axios
      .get<T>(path)
      .catch((err) => err.response)
      .then((response) => {
        setCities(response.data);
      });
  }, []);

  return cities;
};

export default useApiData;
