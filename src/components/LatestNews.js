import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  twitterText: {
    color: "#9c27b0",
  },
  forEachBoxTwtiter: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      width: "100%",
    },
  },
  myWidth: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
});
class LatestNews extends Component {
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
      <Box width="100%">
        <Box>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" color="primary">
              COVID-19 Twitter News Selected Countries
            </Typography>
          </ThemeProvider>
        </Box>
        <Box
          mt={3}
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Box>
            <Typography
              variant="h5"
              className={classes.twitterText}
              gutterBottom
            >
              USA COVID NEWS
            </Typography>
          </Box>
          <Box className={classes.forEachBoxTwtiter}>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="CoronavirusUSA0"
                options={{ height: 400 }}
              />
            </Box>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="COVID19_USA_"
                options={{ height: 400 }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          mt={5}
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Box>
            <Typography
              variant="h5"
              className={classes.twitterText}
              gutterBottom
            >
              India COVID NEWS
            </Typography>
          </Box>
          <Box className={classes.forEachBoxTwtiter}>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="MoHFW_INDIA"
                options={{ height: 400 }}
              />
            </Box>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="COVID19inINDIA"
                options={{ height: 400 }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          mt={5}
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Box>
            <Typography
              variant="h5"
              className={classes.twitterText}
              gutterBottom
            >
              UK COVID NEWS
            </Typography>
          </Box>
          <Box className={classes.forEachBoxTwtiter}>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="UkCovid19"
                options={{ height: 400 }}
              />
            </Box>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="BBCNews"
                options={{ height: 400 }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          mt={5}
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Box>
            <Typography
              variant="h5"
              className={classes.twitterText}
              gutterBottom
            >
              China COVID NEWS
            </Typography>
          </Box>
          <Box className={classes.forEachBoxTwtiter}>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Echinanews"
                options={{ height: 400 }}
              />
            </Box>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ChinaDaily"
                options={{ height: 400 }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          mt={5}
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Box>
            <Typography
              variant="h5"
              className={classes.twitterText}
              gutterBottom
            >
              Europe COVID NEWS
            </Typography>
          </Box>
          <Box className={classes.forEachBoxTwtiter}>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="AutoNewsEurope"
                options={{ height: 400 }}
              />
            </Box>
            <Box className={classes.myWidth}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="EuropePMC_news"
                options={{ height: 400 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default compose(withStyles(useStyles), connect(null))(LatestNews);
