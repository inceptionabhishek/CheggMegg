import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function SolvedQuestionsListForTutor(props) {
  const saveinLocal = () => {
    localStorage.setItem("TutorviewId", props.id);
    localStorage.setItem("TutorviewTitle", props.title);
    localStorage.setItem("TutorviewDescription", props.description);
    localStorage.setItem("TutorviewImage", props.image);
    localStorage.setItem("Tutorviewanswer", props.tutorans);
  };
  return (
    <div className="divquestionlist">
      <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          // alignItems="center"
          // justifyContent="center"
          p={2}
          marginBottom={7}
          // m={3}
          sx={{ width: 1 }}
          // width="300px"
          bgcolor="background.paper"
          boxShadow={10}
        >
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            variant="body1"
            style={{ fontWeight: "bold", color: "#000000", fontSize: "20px" }}
          >
            <span>Question : </span> {props.title}
          </Typography>
          <img
            src={props.image}
            alt="question"
            className="questionimage"
            width="200px"
          />
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            variant="body1"
          >
            <span>
              <b>Description :</b>{" "}
            </span>
            {props.description}
          </Typography>
          <Link to="/tutor/viewanswer">
            <Button variant="contained" color="primary" onClick={saveinLocal}>
              View Answers
            </Button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}

export default SolvedQuestionsListForTutor;
