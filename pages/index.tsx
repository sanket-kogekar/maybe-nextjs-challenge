import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import useApiData, {
  getNames,
  getIataList,
  getCountries,
  getCities,
} from "../hooks/use-api-data";
import Airport from "../types/airport";
import AirportName from "../types/airport-name";
import AirportIata from "../types/airport-iata";
import City from "../types/city";
import Country from "../types/country";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Autocomplete } from "@material-ui/lab";
import { useForm, NestedValue, useWatch } from "react-hook-form";
import { TextField, Select } from "@material-ui/core";
import axios from "axios";

const Page: NextPage = () => {
  const airportNames = getNames<AirportName[]>("/api/names", []);
  const airportIataList = getIataList<AirportIata[]>("/api/iata-list", []);
  const countries = getCountries<Country[]>("/api/countries", []);
  const cities = getCities<City[]>("/api/cities", [], null);
  const c = getCountries<Country[]>("/api/countries", []);

  const initialState = {
    name: "",
    iata: "",
    country: "",
    city: "",
  };

  const [filterObject, setFilterObject] = useState(initialState);
  const [currentCountryField, setCurrentCountryField] = useState(null);
  const [cityOptions, setCityOptions] = useState(cities);

  useEffect(() => {
    if (!!currentCountryField) {
      let newOptions = [];
      cities.forEach((city) => {
        if (city.country === currentCountryField.name) {
          newOptions.push(city);
        }
      });
      setCityOptions(newOptions);
    } else {
      setCityOptions(cities);
    }
  }, [currentCountryField]);

  type FormValues = {
    name: string;
    iata: string;
    country: string;
    city: string;
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const [airports, setAirports] = useState([]);

  const getAirportsList = (filters) => {
    axios({
      method: "post",
      url: "/api/airports",
      data: filters,
    })
      .catch((err) => err.response)
      .then((response) => {
        setAirports(response.data);
      });
  };

  const onSubmit = handleSubmit(() => {
    getAirportsList(filterObject);
  });

  return (
    <Layout>
      <h1 className="text-2xl">&nbsp;&nbsp;Code Challenge: Airports</h1>
      <br />
      <hr />
      {/* Filters */}
      <div style={{ padding: "15px" }}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Autocomplete
                id="name"
                options={airportNames}
                getOptionLabel={(option: AirportName) => option.name}
                onChange={(event: any, option: AirportName | null) => {
                  if (!!option && !!option.name) {
                    setFilterObject({ ...filterObject, name: option.name });
                  } else {
                    setFilterObject({ ...filterObject, name: "" });
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Name" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="iata"
                options={airportIataList}
                getOptionLabel={(option: AirportIata) => option.name}
                onChange={(event: any, option: AirportIata | null) => {
                  if (!!option && !!option.name) {
                    setFilterObject({ ...filterObject, iata: option.name });
                  } else {
                    setFilterObject({ ...filterObject, iata: "" });
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="IATA" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="country"
                {...register("country")}
                options={countries}
                getOptionLabel={(option: Country) => option.name}
                onChange={(event: any, option: Country | null) => {
                  if (!!option && !!option.name) {
                    setFilterObject({ ...filterObject, country: option.name });
                    setCurrentCountryField(option);
                  } else {
                    setFilterObject({ ...filterObject, country: "" });
                    setCurrentCountryField("");
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Country" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="city"
                options={cityOptions}
                getOptionLabel={(option: City) => option.name}
                onChange={(event: any, option: City | null) => {
                  if (!!option && !!option.name) {
                    setFilterObject({ ...filterObject, city: option.name });
                  } else {
                    setFilterObject({ ...filterObject, city: "" });
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="City" variant="outlined" />
                )}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={1}>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <hr />
      {/*  List of Airports  */}
      <h2 className="mt-10 text-xl">
        &nbsp;&nbsp;List of Airports (Sorted A-Z):
      </h2>
      <div>
        {!!airports &&
          airports.map((airport) => (
            <a
              href={`/airports/${airport.iata.toLowerCase()}`}
              key={airport.iata}
              className="mt-5 flex items-center shadow p-5 border"
            >
              <div>
                {airport.name}, {airport.city}
              </div>
              <div className="ml-auto text-mono">{airport.country}</div>
            </a>
          ))}
        <br />
        {!airports && (
          <h4>
            &nbsp;&nbsp;[ Please click on 'Search' to view the list of Available
            Airports! ]
          </h4>
        )}
      </div>
    </Layout>
  );
};

export default Page;
