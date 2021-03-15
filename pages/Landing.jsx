import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import Header from "../components/Header";

const Landing = () => {
  return (
    <Container>
      <Header />
      <Grid container direction="column" style={{ paddingTop: '142px', paddingLeft: '50px' }}>
        <Grid item style={{ paddingBottom: '2%'}}>
          <Typography
            variant="body1"
            style={{ color: "#ff0a54" }}
          >
            Hi, I'm
          </Typography>
        </Grid>
        <Grid item style={{ paddingBottom: '2%'}}>
          <Typography
            variant="h1"
            style={{  color: "#ff0a54" }}
          >
            Lucie
          </Typography>
        </Grid>
        <Grid item style={{ padding: '2%'}}>
          <Typography
            variant="h1"
            style={{  color: "#ff0a54" }}
          >
            Joncourt
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
