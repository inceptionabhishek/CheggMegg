import React from "react";
import Box from "@mui/material/Box";
import { Grid, Popover, Stack, Typography } from "@mui/material";
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
          <Stack
            spacing={2}
            direction="row"
            style={{
              marginTop: "10px",
            }}
          >
            <Link to="/student/getquestion">
              <Button
                variant="contained"
                color="primary"
                onClick={handler}
                style={{
                  fontSize: "10px",
                }}
              >
                View Question
              </Button>
            </Link>

            <Button
              variant="contained"
              color="error"
              className="btn"
              onClick={HandlerDelete}
              style={{
                fontSize: "10px",
              }}
            >
              Delete
            </Button>
            <Link to="/students/updatequestion">
              <Button
                variant="contained"
                color="success"
                className="btn"
                style={{
                  fontSize: "10px",
                }}
                onClick={HandlerUpdate}
              >
                Update
              </Button>
            </Link>
          </Stack>
        </Box>
      </Grid>
    </div>
  );
}

export default UnsolvedQuestionsList;
