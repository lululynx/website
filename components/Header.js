import React, { useState } from "react";
import Link from "next/link";
import { Grid, IconButton, Typography, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Email, GitHub, LinkedIn, FileCopy } from "@material-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Header = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeSnackbar = () => {
    setShowEmail(false);
    setCopied(false);
  };

  return (
    <Grid container style={{ paddingTop: "70px" }} justify="center">
      <Snackbar open={copied} autoHideDuration={1000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity="success">
          Email address successfully copied to your clipboard!
        </Alert>
      </Snackbar>
      <Grid item style={{ padding: "3%" }}>
        {showEmail ? (
          <CopyToClipboard
            text={"ldmjoncourt@gmail.com"}
            onCopy={() => {
              setCopied(true);
              setShowEmail(false);
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="row"
            >
              <Grid item xs={8}>
                <Grid container justify="flex-end">
                  <Typography variant="caption" style={{ color: "#ff0a54" }}>
                    Please click to copy my email address
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <IconButton color="primary">
                  <FileCopy />
                </IconButton>
              </Grid>
            </Grid>
          </CopyToClipboard>
        ) : (
          <IconButton color="primary" onClick={() => setShowEmail(true)}>
            <Email />
          </IconButton>
        )}
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
