import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
function CardComponent(props) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={1}
          height="350px"
          bgcolor="background.paper"
          boxShadow={3}
        >
          <img
            src={props.image}
            className="image-thumbnail"
            alt="Thumbnail"
            height="150px"
            width="150px"
            style={{
              borderRadius: "50%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          ></img>
          <h2
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {props.Title}
          </h2>
        </Box>
      </Grid>
    </>
  );
}

export default CardComponent;
