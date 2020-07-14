import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { getCurrentStats, getDataForMiniData } from "../actions";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
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
const useStyles = (theme) => ({});
class GolbalStat extends Component {
  componentDidMount() {
    this.props.getCurrentStats();
    this.props.getDataForMiniData();
  }
  makeFirstGraph = () => {
    if (!this.props.miniGraphData) {
      return <Typography variant="h2">Loading ...</Typography>;
    }
    let startIndex = 0;
    if (this.props.miniGraphData.length > 80) {
      startIndex = this.props.miniGraphData.length - 80;
    }
    let array = this.props.miniGraphData.slice(
      startIndex,
      this.props.miniGraphData.length
    );
    let array2 = array.filter((curr, i) => i % 3 === 0);
    let returnObject = {};
    let computedConfirmedCases = array2.map((curr, index) => {
      if (index !== 0) {
        if (array[index - 1]) {
          returnObject = {
            name: curr.name,
            confirmedCase:
              array[index].confirmedCase - array[index - 1].confirmedCase,
            totalDeaths:
              array[index].totalDeaths - array[index - 1].totalDeaths,
            totalRecovered:
              array[index].totalRecovered - array[index - 1].totalRecovered,
          };
          return returnObject;
        }
      }
      return undefined;
    });
    computedConfirmedCases = computedConfirmedCases.filter((curr) => curr);
    let ticks = computedConfirmedCases.map((curr) => {
      return curr.name;
    });

    return (
      <Box>
        <div style={{ height: "250px", width: "100%" }}>
          <ResponsiveContainer>
            <LineChart
              width={730}
              height={250}
              data={computedConfirmedCases}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tickFormatter={(tick) => {
                  let date = new Date(tick);
                  let day = ("" + date.getDate()).slice(-2);
                  let m = ("" + (date.getMonth() + 1)).slice(-2);
                  return `${m}/${day}`;
                }}
                ticks={ticks}
                tick={{ fontSize: 10, fill: "red" }}
                interval={0}
              />
              <YAxis />
              <Legend />
              <Tooltip />
              <Line type="monotone" dataKey="confirmedCase" stroke="#FF0000" />
              <Line type="monotone" dataKey="totalRecovered" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ height: "250px", width: "100%" }}>
          <ResponsiveContainer>
            <LineChart
              width={730}
              height={250}
              data={computedConfirmedCases}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tickFormatter={(tick) => {
                  let date = new Date(tick);
                  let day = ("" + date.getDate()).slice(-2);
                  let m = ("" + (date.getMonth() + 1)).slice(-2);
                  return `${m}/${day}`;
                }}
                ticks={ticks}
                tick={{ fontSize: 10, fill: "red" }}
                interval={0}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalDeaths" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Box>
    );
  };
  getStats = () => {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: red[500],
        },
        secondary: {
          main: green[500],
        },
      },
    });
    if (!this.props.currstats) {
      return <Typography variant="h2">Loading ...</Typography>;
    }

    return (
      <ThemeProvider theme={theme}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              Confirmed
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              {this.props.currstats.confirmed}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="initial" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" color="initial">
              {this.props.currstats.deaths}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="secondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" color="secondary">
              {this.props.currstats.recovered}
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    );
  };
  getConfirmedStats = () => {};
  render() {
    return (
      <Box width="75%">
        <Box justifyContent="space-between">
          <Box>{this.getStats()}</Box>
          <Box mt={4} display="flex" justifyContent="center">
            <Typography variant="h5" color="secondary">
              Total confirmed, recovered, deaths cases per day
            </Typography>
          </Box>
          <Box mt={3}>
            <Paper>{this.makeFirstGraph()}</Paper>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currstats: state.covidData.CurrentStats,
    miniGraphData: state.covidData.miniGraphData,
  };
};
export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, { getCurrentStats, getDataForMiniData })
)(GolbalStat);
