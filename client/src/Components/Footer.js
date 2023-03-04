import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#000000",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
        sticky="bottom"
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="white" variant="h5">
                By Abhishek kumar{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="white" variant="subtitle1">
                {`${new Date().getFullYear()} | React | Material UI | React Router`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
