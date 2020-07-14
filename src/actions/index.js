import {
  CONUNTIRES_NAMES,
  FILTER_COUNTIRES,
  CURRENT_STATS,
  MINI_GRAPHS_DATA,
  DATA_FOR_TABLE,
  DATA_FOR_ONE_COUNTRY,
  DETAIL_DATA_FOR_ONE_COUNTRY,
} from "./types";
import { mathdro, javieraviles, pomber } from "../apis/covidapibase";

export const fetchCountriesNames = () => async (dispatch) => {
  const countriesNames = await mathdro.get("api/countries");
  dispatch({ type: CONUNTIRES_NAMES, payload: countriesNames.data });
};
export const getFilterCountries = (filterLetter) => (dispatch, getState) => {
  var filterResult;
  if (filterLetter === "") {
    filterResult = [];
  } else {
    filterResult = getState().covidData.countriesNames.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(filterLetter.toLowerCase())
    );
  }
  dispatch({ type: FILTER_COUNTIRES, payload: filterResult });
};
export const getCurrentStats = () => async (dispatch) => {
  const currentStats = await javieraviles.get("all");
  let result = {
    confirmed: currentStats.data.cases,
    recovered: currentStats.data.recovered,
    deaths: currentStats.data.deaths,
  };
  dispatch({ type: CURRENT_STATS, payload: result });
};
export const getDataForMiniData = () => async (dispatch) => {
  const currentStats = await mathdro.get("api/daily");
  const data = currentStats.data.map((curr) => {
    return {
      name: curr.reportDate,
      confirmedCase: curr.totalConfirmed,
      totalDeaths: curr.deaths.total,
      totalRecovered: curr.recovered.total,
    };
  });
  dispatch({ type: MINI_GRAPHS_DATA, payload: data });
};
export const dataForTable = () => async (dispatch) => {
  const tableData = await javieraviles.get("countries");
  dispatch({ type: DATA_FOR_TABLE, payload: tableData.data });
};
export const getDataForOneCountry = (country) => async (dispatch) => {
  const oneCountryData = await javieraviles.get(`countries/${country}`);
  dispatch({ type: DATA_FOR_ONE_COUNTRY, payload: oneCountryData.data });
};
export const detailDataForOneCountry = (country) => async (dispatch) => {
  const detailCountryData = await pomber.get();

  dispatch({
    type: DETAIL_DATA_FOR_ONE_COUNTRY,
    payload: detailCountryData.data[country],
  });
};
