import { CONUNTIRES_NAMES } from "../actions/types";
import {
  FILTER_COUNTIRES,
  MINI_GRAPHS_DATA,
  DATA_FOR_TABLE,
  DATA_FOR_ONE_COUNTRY,
  DETAIL_DATA_FOR_ONE_COUNTRY,
} from "../actions/types";
import { CURRENT_STATS } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case CONUNTIRES_NAMES:
      return { ...state, countriesNames: action.payload };
    case FILTER_COUNTIRES:
      return { ...state, filterCountries: action.payload };
    case CURRENT_STATS:
      return { ...state, CurrentStats: action.payload };
    case MINI_GRAPHS_DATA:
      return { ...state, miniGraphData: action.payload };
    case DATA_FOR_TABLE:
      return { ...state, tableData: action.payload };
    case DATA_FOR_ONE_COUNTRY:
      return { ...state, oneCOuntryData: action.payload };
    case DETAIL_DATA_FOR_ONE_COUNTRY:
      return { ...state, detailDataForOneCountry: action.payload };
    default:
      return state;
  }
};
