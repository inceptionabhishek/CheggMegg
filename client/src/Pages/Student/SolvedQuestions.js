import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import { Container, Spinner } from "react-bootstrap";
import SolvedQuestionsList from "../../Components/Student/SolvedQuestionsList";
import { SERVER_URI } from "../../apiService";
function SolvedQuestions() {
  const [solved, setSolved] = useState([]);
  const api = `${SERVER_URI}/api/solved/view/student`;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post(api, {
        studentemail: localStorage.getItem("email"),
      })
      .then((res) => {
        setSolved(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [solved]);

  const tempimage =
    "https://res.cloudinary.com/dkeiewkz6/image/upload/v1646113532/rkvgtstl4xdqcey0x8lr.png";
  return (
    <>
      {loading ? (
        <>
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
          <Container
            style={{
              backgroundColor: "#f5f5f5",
              minHeight: "100vh",
              paddingTop: "20px",
            }}
          >
            <h1 className="askQuestion">Solved Questions</h1>
            <br />
            <br />
            {solved.length === 0 ? (
              <div className="divquestionlist">
                <Typography variant="h5" component="h2">
                  No Solved Questions
                </Typography>
              </div>
            ) : (
              solved.map((question) => (
                <SolvedQuestionsList
                  id={question._id}
                  title={question.questionTitle}
                  image={question.questionImage}
                  description={question.questionDescription}
                  tutoremail={question.tutoremail}
                  tutorans={question.tutorans}
                  student={question.studentemail}
                />
              ))
            )}
          </Container>
        </>
      )}
    </>
  );
}

export default SolvedQuestions;
