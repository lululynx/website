import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid container style={{ paddingTop: "28%" }} alignContent="flex-end">
      <Grid item>
        <Typography variant="h6" color="primary">
          Get in touch: ldmjoncourt@gmail.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
