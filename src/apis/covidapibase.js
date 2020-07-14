import axios from "axios";

export const mathdro = axios.create({
  baseURL: "https://covid19.mathdro.id/",
});
export const javieraviles = axios.create({
  baseURL: "https://coronavirus-19-api.herokuapp.com/",
});
export const pomber = axios.create({
  baseURL: "https://pomber.github.io/covid19/timeseries.json",
});
