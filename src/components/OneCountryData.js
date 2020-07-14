import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { getDataForOneCountry, detailDataForOneCountry } from "../actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { PieChart } from "react-minimal-pie-chart";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
const useStyles = (theme) => ({
  listItem: {
    color: "#757ce8",
  },
  myPaper: {
    background: "#757ce8",
  },
  root: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    },
  },
  forDetailAndPie: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  forPieChart: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  forList: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
});

class OneCountryData extends Component {
  componentDidMount = () => {
    let name = this.props.match.params.countryName;
    if (name) {
      if (name === "US") {
        name = "USA";
      }
      if (name === "United Kingdom") {
        name = "UK";
      }
      this.props.getDataForOneCountry(name);
      if (name === "USA") {
        name = "US";
      }
      if (name === "UK") {
        name = "United Kingdom";
      }
      this.props.detailDataForOneCountry(name);
    }
  };

  makeAllCharts = () => {
    if (!this.props.dataForGraphs) {
      return <div>Loading...</div>;
    }
    var bigdata = this.props.dataForGraphs;
    let neededItems = bigdata.length - 30;
    if (bigdata.length > neededItems) {
      bigdata = bigdata.slice(neededItems);
    }
    let dataPerDay = bigdata.map((curr, index) => {
      if (index !== 0) {
        if (bigdata[index - 1]) {
          return {
            date: curr.date,
            confirmed: curr.confirmed - bigdata[index - 1].confirmed,
            deaths: curr.deaths - bigdata[index - 1].deaths,
            recovered: curr.recovered - bigdata[index - 1].recovered,
          };
        }
      }
      return undefined;
    });
    dataPerDay = dataPerDay.filter((curr) => curr);
    return (
      <Box>
        <Typography align="center" variant="h6" gutterBottom>
          {"Total Confirmed Cases Par day"}
        </Typography>
        {this.makeLineChartForTotalCases(dataPerDay)}
        <Typography align="center" variant="h6" gutterBottom>
          {"Total Deaths Par day"}
        </Typography>
        {this.makeBarChartForTotalDeaths(dataPerDay)}
        <Typography align="center" variant="h6" gutterBottom>
          {"Total Recovered Par day"}
        </Typography>
        {this.makeBarChartForTotalRecoverd(dataPerDay)}
      </Box>
    );
  };

  makeLineChartForTotalCases = (bigdata) => {
    return (
      <div style={{ height: "250px", width: "100%" }}>
        <ResponsiveContainer>
          <LineChart data={bigdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                let date = new Date(tick);
                let day = ("" + date.getDate()).slice(-2);
                let m = ("" + (date.getMonth() + 1)).slice(-2);
                return `${m}/${day}`;
              }}
            />

            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="confirmed" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  makeBarChartForTotalDeaths = (bigdata) => {
    return (
      <div style={{ height: "250px", width: "100%" }}>
        <ResponsiveContainer>
          <LineChart data={bigdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                let date = new Date(tick);
                let day = ("" + date.getDate()).slice(-2);
                let m = ("" + (date.getMonth() + 1)).slice(-2);
                return `${m}/${day}`;
              }}
            />

            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="deaths" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  makeBarChartForTotalRecoverd = (bigdata) => {
    return (
      <div style={{ height: "250px", width: "100%" }}>
        <ResponsiveContainer>
          <LineChart data={bigdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                let date = new Date(tick);
                let day = ("" + date.getDate()).slice(-2);
                let m = ("" + (date.getMonth() + 1)).slice(-2);
                return `${m}/${day}`;
              }}
            />

            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="recovered" stroke="#ffa500" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  makeListForOneCountryData = () => {
    let myObj = this.props.userSelectedCountryData;
    if (!myObj) {
      return <div>Loading...</div>;
    }
    const propertyNames = Object.keys(myObj);
    const propertyValues = Object.values(myObj);
    const { classes } = this.props;
    return propertyNames.map((curr, index) => {
      return (
        <ListItem className={classes.listItem} button key={index}>
          <ListItemText
            color="secondary"
            primary={`${curr[0].toUpperCase() + curr.slice(1)}  -  ${
              propertyValues[index]
            }`}
          />
        </ListItem>
      );
    });
  };
  createChart = () => {
    let myObj = this.props.userSelectedCountryData;
    if (!myObj) {
      return <div>Loading...</div>;
    }
    const data = [
      { title: "Total cases", value: myObj.cases, color: "#E38627" },
      { title: "Total Deaths", value: myObj.deaths, color: "#C13C37" },
      { title: "Total Recovered", value: myObj.recovered, color: "#ffd700" },
    ];
    const shiftSize = 7;
    const defaultLabelStyle = {
      fontSize: "5px",
      fontFamily: "sans-serif",
    };
    return (
      <PieChart
        animate
        data={data}
        radius={PieChart.defaultProps.radius - shiftSize}
        segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
        label={({ dataEntry }) => dataEntry.value}
        labelStyle={{
          ...defaultLabelStyle,
        }}
      />
    );
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
    let countryName = this.props.match.params.countryName;
    const { classes } = this.props;
    return (
      <div>
        <Box className={classes.root}>
          <Box mt={4}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h3"
                color="primary"
              >{`${countryName} COVID19 Statistics`}</Typography>
            </ThemeProvider>
          </Box>
          <Box width="75%" mt={5}>
            <Box className={classes.forDetailAndPie}>
              <Box className={classes.forList}>
                <Typography
                  variant="h6"
                  gutterBottom
                >{`${countryName} statistics details`}</Typography>
                <Paper>
                  <List
                    component="nav"
                    style={{ overflow: "auto", width: "100%" }}
                  >
                    {this.makeListForOneCountryData()}
                  </List>
                </Paper>
              </Box>
              <Box className={classes.forPieChart}>
                <Typography
                  variant="h6"
                  gutterBottom
                >{`Confirmed, Deaths, Recovered`}</Typography>
                <Paper className={classes.myPaper}>{this.createChart()}</Paper>
              </Box>
            </Box>
          </Box>
          <Box width="75%" mt={5}>
            {this.makeAllCharts()}
          </Box>
        </Box>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userSelectedCountryData: state.covidData.oneCOuntryData,
    dataForGraphs: state.covidData.detailDataForOneCountry,
  };
};
export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, { getDataForOneCountry, detailDataForOneCountry })
)(OneCountryData);
