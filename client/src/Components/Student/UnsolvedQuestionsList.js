import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { SERVER_URI } from "../../apiService";
function UnsolvedQuestionsList(props) {
  const handler = () => {
    localStorage.setItem("question_id", props.question_id);
  };
  const apidelete = `${SERVER_URI}/api/students/deletequestion`;
  const HandlerDelete = () => {
    axios
      .post(apidelete, {
        id: props.question_id,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const HandlerUpdate = () => {
    localStorage.setItem("question_title", props.title);
    localStorage.setItem("question_description", props.description);
    localStorage.setItem("question_image", props.image);
    localStorage.setItem("Update_question_id", props.question_id);
  };
  return (
    <div className="divquestionlist">
      <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={3}
          sx={{ width: 1 }}
          bgcolor="background.paper"
          boxShadow={3}
        >
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            variant="body1"
          >
            {props.title}
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
            {props.description}
          </Typography>
          <Link to="/student/getquestion">
            <Button variant="contained" color="primary" onClick={handler}>
              View Question
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="error"
            className="btn"
            onClick={HandlerDelete}
          >
            Delete
          </Button>
          <Link to="/students/updatequestion">
            <Button
              variant="outlined"
              color="success"
              className="btn"
              onClick={HandlerUpdate}
            >
              Update
            </Button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}

export default UnsolvedQuestionsList;
