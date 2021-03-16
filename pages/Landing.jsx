import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <Container>
      <Header />
      <Grid container direction="column" style={{ paddingTop: '142px', paddingLeft: '50px' }}>
        <Grid item style={{ paddingBottom: '2%'}}>
          <Typography
            variant="body1"
            style={{ color: "#00f5d4" }}
          >
            Hi, I'm
          </Typography>
        </Grid>
        <Grid item style={{ paddingBottom: '2%'}}>
          <Typography
            variant="h1"
            style={{  color: "#00f5d4" }}
          >
            Lucie
          </Typography>
        </Grid>
        <Grid item style={{ padding: '2%'}}>
          <Typography
            variant="h1"
            style={{  color: "#00f5d4" }}
          >
            Joncourt
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Landing;
