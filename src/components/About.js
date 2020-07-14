import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
const useStyles = (theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      alignSelf: "center",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  textcolor: {
    color: "#4dabf5",
  },
});
class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Box mt={5} display="flex" flexDirection="column" width="100%">
          <Box className={classes.root}>
            <Box>
              <Typography variant="h6" display="initial" gutterBottom>
                Question: Are you official? <br />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textcolor}
                >
                  Answer: No.
                </Typography>
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography variant="h6" display="initial" gutterBottom>
                Question: What are your sources? How is the data gathered for
                this project?
                <br />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textcolor}
                >
                  Answer: This web application shows compiled data from various
                  resources by person. This is not an offical government website
                  and any reproductions has not been produced in affiliation
                  with, or with the endorsement of the Government of any
                  Country. Full list resources can found below
                </Typography>
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography variant="h6" display="initial" gutterBottom>
                Resources:
                <br />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textcolor}
                >
                  {" "}
                  All the data comes from APIs, which are opensource and can be
                  found at GitHub. Please check the following GitHub profiles to
                  get more info about APIs.
                  <br />
                  <Link
                    target="_blank"
                    href="https://github.com/mathdroid/"
                    variant="body2"
                    color="error"
                  >
                    Mathdroid
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/pomber/"
                    variant="body2"
                    color="error"
                  >
                    &nbsp;Pomber
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/javieraviles/"
                    variant="body2"
                    color="error"
                  >
                    &nbsp;Javieraviles
                  </Link>
                </Typography>
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography variant="h6" display="initial" gutterBottom>
                Question: Why are you guys putting in time and resources to do
                this while not gaining a single dollar from it?
                <br />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textcolor}
                >
                  Answer: Because it affects all of us. Today it's someone else
                  who is getting infected; tomorrow it could be us. We need to
                  prevent the spread of this virus. We need to document the data
                  so that people with knowledge can use this data to make
                  informed decisions.
                </Typography>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" display="initial" gutterBottom>
                Question: Who are you? <br />
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.textcolor}
                >
                  Answer: My name is Simerpreet S Jassal, recently graduated
                  from BVC Calgary AB Canda. I thought it would be a severe
                  worldwide issue considering the speed of the spread of this
                  virus ever since this novel coronavirus occurred. I often
                  googled to check up the current status by going through many
                  websites and felt I was wasting time. I wasn't the only one
                  feeling this way. That's why I started creating this
                  application. It provides up-to-date information on the novel
                  coronavirus (COVID-19) about more than 200 countries. The
                  latest numbers( total cases, total deaths, total recovered)
                  are broken by Countries as well as overall circumstances
                  around the world. I like to help people, and want them to
                  understand this situation easily using this application. I
                  hope covid 19 pandemics will end soon.
                  <br />I would like to collect feedback from you, Please share
                  with your great idea, or If you have any further inquiries
                  about me, Please reach me at
                  <Typography variant="body1" style={{ color: "red" }}>
                    simepreetjassal13@gmail.com
                  </Typography>
                </Typography>
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography
                variant="h6"
                display="initial"
                gutterBottom
                align="center"
              >
                Thank you for your support!
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

export default withStyles(useStyles)(About);
