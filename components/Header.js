import React from "react";
import Link from "next/link";
import { Grid, IconButton } from "@material-ui/core";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

const Header = () => {
  return (
    <Grid container style={{ paddingTop: "70px" }} justify="center">
      <Grid item style={{ padding: "3%" }}>
        <a href="mailto:someone@yoursite.com">
          <IconButton color="primary" onClick={() => setShowEmail(true)}>
            <Email />
          </IconButton>
        </a>
      </Grid>
      <Grid item style={{ padding: "3%" }}>
        <Link href="https://www.github.com/lululynx" target="_blank">
          <IconButton color="primary">
            <GitHub />
          </IconButton>
        </Link>
      </Grid>
      <Grid item style={{ padding: "3%" }}>
        <IconButton color="primary">
          <Link href="https://linkedin.com/in/luciejo" target="_blank">
            <LinkedIn />
          </Link>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
