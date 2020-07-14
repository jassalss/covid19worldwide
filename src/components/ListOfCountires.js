import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ReactCountryFlag from "react-country-flag";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import history from "../history";
class ListOfCountires extends Component {
  getCountryPage = (name) => {
    history.push(`/onecountrydata/${name}`);
  };
  makeListOfCountries = () => {
    if (!this.props.countriesNames) {
      return;
    }

    return this.props.countriesNames.map((country, index) => {
      return (
        <ListItem
          key={index}
          button
          onClick={() => {
            this.getCountryPage(country.name);
          }}
        >
          <ListItemIcon>
            <ReactCountryFlag countryCode={country.iso2} svg />
          </ListItemIcon>
          <ListItemText primary={country.name} />
        </ListItem>
      );
    });
  };

  render() {
    return (
      <div>
        <List
          component="nav"
          style={{ maxHeight: 400, overflow: "auto", width: "100%" }}
        >
          {this.makeListOfCountries()}
        </List>
      </div>
    );
  }
}
export default ListOfCountires;
