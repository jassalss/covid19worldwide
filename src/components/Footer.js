import Box from "@material-ui/core/Box";
import { Typography, Link, Paper } from "@material-ui/core";
import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <div width="100%">
        <Paper>
          <Box mt={5} display="flex" alignItems="center" flexDirection="column">
            <Box>
              <Box>
                <a
                  href="https://ko-fi.com/C0C51V1L8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textAlign: "left" }}
                >
                  <img
                    height="36"
                    styles="border:0px;height:36px;"
                    src="https://cdn.ko-fi.com/cdn/kofi2.png?v=2"
                    border="0"
                    alt="Buy Me a Coffee at ko-fi.com"
                  />
                </a>
              </Box>
              <Box>
                <Typography variant="body1">
                  Simerpreet S Jassal <br></br>simerpreetjassal13@gmail.com
                </Typography>
                <Link
                  style={{ color: "#4dabf5" }}
                  variant="body1"
                  target="_blank"
                  href="https://www.linkedin.com/in/simerpreet-singh-jassal/"
                >
                  Linkedin
                </Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </div>
    );
  }
}

export default footer;
