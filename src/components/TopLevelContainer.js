import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SearchBar from "./Search";
import ListOfCountires from "./ListOfCountires";
import GolbalStat from "./GolbalStat";

class TopLevelContainer extends Component {
  render() {
    return (
      <div>
        <Box mt={5} display="flex" alignItems="center" flexDirection="column">
          <SearchBar />
          <ListOfCountires />
          <GolbalStat />
        </Box>
      </div>
    );
  }
}

export default TopLevelContainer;
