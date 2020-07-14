import { combineReducers } from "redux";
import covidData from "./covidData";

export default combineReducers({
  covidData: covidData,
});
