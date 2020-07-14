import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { fetchCountriesNames, getFilterCountries } from "../actions";
import { connect } from "react-redux";
import ListOfCountires from "./ListOfCountires";
import compose from "recompose/compose";
const useStyles = (theme) => ({});
class Search extends Component {
  componentDidMount() {
    this.props.fetchCountriesNames();
  }
  getTheCountryList = (e) => {
    this.props.getFilterCountries(e.target.value);
  };
  render() {
    const theme = createMuiTheme();
    theme.typography.h3 = {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
    };
    const classes = useStyles();
    return (
      <div>
        <Box display="flex" m={1} className={classes.forText}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" color="error">
              COVID-19(Coronavirus)
            </Typography>
            <Typography variant="h3">Updates: Global</Typography>
          </ThemeProvider>
        </Box>
        <Box m={1} p={1} width="100%" bgcolor="background.paper">
          <TextField
            onChange={this.getTheCountryList}
            fullWidth={true}
            id="outlined-secondary"
            label="Search your country"
            variant="outlined"
            color="secondary"
          />
        </Box>
        <Box>
          <ListOfCountires countriesNames={this.props.filterResult} />
        </Box>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { filterResult: state.covidData.filterCountries };
};
export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, { fetchCountriesNames, getFilterCountries })
)(Search);
