import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopLevelContainer from "./TopLevelContainer";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import CountriesSatInTable from "./CountriesSatInTable";
import OneCountryData from "./OneCountryData";
import LatestNews from "./LatestNews";
import Symptoms from "./Symptoms";
import About from "./About";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <CssBaseline />

      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={TopLevelContainer} />
          <Route
            path="/countriesStatistics"
            exact
            component={CountriesSatInTable}
          />
          <Route
            path="/onecountrydata/:countryName"
            exact
            component={OneCountryData}
          />
          <Route path="/LatestNews" exact component={LatestNews} />
          <Route path="/symptoms" exact component={Symptoms} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
