import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { dataForTable } from "../actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import MapContainer from "./MapContainer";

import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Area,
  Bar,
} from "recharts";
const useStyles = {
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 800,
  },
  pinkcolor: { backgroundColor: red[600], color: "white" },
};
class CountriesSatInTable extends Component {
  componentDidMount() {
    this.props.dataForTable();
  }

  makeChartOfFirstTen = () => {
    if (!this.props.tableData) {
      return <div>Loading...!</div>;
    }
    let myData = this.props.tableData.slice(1, 11);
    return (
      <div style={{ height: "250px", width: "100%" }}>
        <ResponsiveContainer>
          <ComposedChart width={730} height={250} data={myData}>
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="cases" barSize={20} fill="#413ea0" />
            <Area
              type="monotone"
              dataKey="recovered"
              fill="#FF4500"
              stroke="#FF4500"
            />
            <Line type="monotone" dataKey="deaths" stroke="#00FF00" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  };
  todayStat = () => {
    if (!this.props.tableData) {
      return <div>Loading...!</div>;
    }
    let myData = this.props.tableData.slice(1, 11);

    return (
      <div style={{ height: "250px", width: "100%" }}>
        <ResponsiveContainer>
          <ComposedChart width={730} height={250} data={myData}>
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="todayCases" barSize={20} fill="#413ea0" />
            <Area
              type="monotone"
              dataKey="todayDeaths"
              fill="#FF4500"
              stroke="#FF4500"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  };
  state = { page: 0, rowsPerPage: 20, countriesCount: 0 };
  columns = [
    { id: "country", label: "Country", minWidth: 110 },
    { id: "cases", label: "Cases" },
    { id: "todayCases", label: "Today Cases" },
    { id: "deaths", label: "Deaths" },
    { id: "recovered", label: "Recovered" },
    { id: "active", label: "Active" },
    { id: "critical", label: "Critical" },
    { id: "casesPerOneMillion", label: "Cases/Million" },
    { id: "deathsPerOneMillion", label: "Deaths/Million" },
  ];
  TableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {this.columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  createTableRows = () => {
    let { classes } = this.props;
    if (!this.props.tableData) {
      return <div>Loading...!</div>;
    }
    return (
      <TableBody>
        {this.props.tableData
          .slice(
            this.state.page * this.state.rowsPerPage,
            this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
          )
          .map((row, index) => {
            let myColor = classes.pinkFade;
            if (index % 2 === 0) {
              myColor = classes.pinkcolor;
            }
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.code}
                className={myColor}
              >
                {this.columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
      </TableBody>
    );
  };
  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
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
    const { classes } = this.props;
    return (
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box width="75%">
          <Box display="flex" flexDirection="column">
            <ThemeProvider theme={theme}>
              <Typography variant="h3" align="center">
                Global Statistics
              </Typography>
              <Typography align="center" variant="subtitle1">
                Total countries affected:{" "}
                {this.props.tableData ? this.props.tableData.length : 0}
              </Typography>
            </ThemeProvider>
          </Box>
          <Box mt={4}>
            <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table"></Table>
                {this.TableHeader()}
                {this.createTableRows()}
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[20, 50, 100]}
                component="div"
                count={this.props.tableData ? this.props.tableData.length : 5}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
          <Box display="flex" justifyContent="center" mt={5}>
            <Typography variant="h5" cxxx>
              Interactive map (hover over map to see the statistics )
            </Typography>
          </Box>
          <Box mt={3}>
            <MapContainer
              data={this.props.tableData ? this.props.tableData : []}
            />
          </Box>
          <Box display="flex" justifyContent="center" mt={5}>
            <Typography variant="h5" cxxx>
              Total Cases, Deaths this day (Top 10 Countries)
            </Typography>
          </Box>
          <Box mt={5}>{this.todayStat()}</Box>
          <Box display="flex" justifyContent="center" mt={5}>
            <Typography variant="h5">
              Total Cases, Rcovered, Deaths (Top 10 Countries)
            </Typography>
          </Box>
          <Box mt={5}>{this.makeChartOfFirstTen()}</Box>
        </Box>
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return { tableData: state.covidData.tableData };
};
export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, { dataForTable })
)(CountriesSatInTable);
