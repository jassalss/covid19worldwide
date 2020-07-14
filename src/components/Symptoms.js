import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
class Symptoms extends Component {
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
    return (
      <div>
        <Box>
          <Box mt={5}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">Symptoms of COVID-19</Typography>
            </ThemeProvider>
          </Box>
          <Box mt={2}>
            The most common symptoms of COVID-19 are fever, dry cough, and
            tiredness. Other symptoms that are less common and may affect some
            patients include aches and pains, nasal congestion, headache,
            conjunctivitis, sore throat, diarrhea, loss of taste or smell or a
            rash on skin or discoloration of fingers or toes. These symptoms are
            usually mild and begin gradually. Some people become infected but
            only have very mild symptoms. Most people (about 80%) recover from
            the disease without needing hospital treatment. Around 1 out of
            every 5 people who gets COVID-19 becomes seriously ill and develops
            difficulty breathing. Older people, and those with underlying
            medical problems like high blood pressure, heart and lung problems,
            diabetes, or cancer, are at higher risk of developing serious
            illness. However, anyone can catch COVID-19 and become seriously
            ill. People of all ages who experience fever and/or cough associated
            withdifficulty breathing/shortness of breath, chest pain/pressure,
            or loss of speech or movement should seek medical attention
            immediately. If possible, it is recommended to call the health care
            provider or facility first, so the patient can be directed to the
            right clinic.
          </Box>
          <Box mt={2}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">What is COVID-19</Typography>
            </ThemeProvider>
          </Box>
          <Box mt={2}>
            COVID-19 is the infectious disease caused by the most recently
            discovered coronavirus. This new virus and disease were unknown
            before the outbreak began in Wuhan, China, in December 2019.
            COVID-19 is now a pandemic affecting many countries globally.
          </Box>
          <Box mt={2}>
            The content is copy of an official work that is published by the
            World Health Organization: WHO
          </Box>
          <Box>
            [Reference: Q and A on coronaviruses (COVID-19) WHO Website
            <Link
              target="_blank"
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
              variant="body2"
              color="error"
            >
              &nbsp; Link
            </Link>
            ]
          </Box>
          <Box mt={2}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">
                COVID-19 Self-Assessment by Health Canada
              </Typography>
            </ThemeProvider>
          </Box>
          <Box>
            <Link
              href="https://ca.thrive.health/covid19/en"
              variant="body2"
              color="error"
              target="_blank"
            >
              Click here for self Assessment
            </Link>
          </Box>
        </Box>
      </div>
    );
  }
}

export default Symptoms;
