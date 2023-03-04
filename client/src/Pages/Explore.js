import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Spinner } from "react-bootstrap";
import CardComponentForExplore from "../Components/CardComponentForExplore";
import { SERVER_URI } from "../apiService";
import Footer from "../Components/Footer";
function Explore() {
  const api = `${SERVER_URI}/api/solved/view/all`;
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setAllQuestions(res.data.data);
        setLoading(false);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2 className="Top-Section2">Explore All Questions</h2>
      <div
        style={{
          marginBottom: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <>
            {" "}
            <div className="spinner">
              <Spinner
                animation="border"
                variant="primary"
                className="TempSpinner"
              />
            </div>
          </>
        ) : (
          <>
            {allQuestions.length === 0 ? (
              <div>
                <Grid container spacing={3} padding="2px" marginTop="200px">
                  <Typography
                    variant="h4"
                    color="text.primary"
                    textAlign="center"
                  >
                    No Questions Found
                  </Typography>
                </Grid>
              </div>
            ) : (
              <>
                <div className="container">
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    padding="2px"
                  >
                    {allQuestions.map((question) => {
                      return <CardComponentForExplore data={question} />;
                    })}
                  </Grid>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Explore;

/*
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
                <h1>dhdh</h1>
              </Box>
            </Grid>;


*/
