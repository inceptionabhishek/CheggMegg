import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Container, Spinner } from "react-bootstrap";
import axios from "axios";
import UnsolvedQuestionsList from "../../Components/Student/UnsolvedQuestionsList";
import { SERVER_URI } from "../../apiService";
function UnsolvedQuestions() {
  const email = localStorage.getItem("email");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const uri = `${SERVER_URI}/api/question/getunsolvedquestion`;
  useEffect(() => {
    axios
      .post(uri, {
        email: email,
      })
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner
            animation="border"
            variant="primary"
            className="TempSpinner"
          />
        </div>
      ) : (
        <Container
          style={{
            backgroundColor: "#f5f5f5",
            minHeight: "100vh",
            paddingTop: "20px",
          }}
        >
          <h1 className="askQuestion">Unsolved Questions</h1>
          <br />
          <br />

          {questions?.length === 0 ? (
            <div className="divquestionlist">
              <Typography variant="h5" component="h2">
                No Unsolved Questions
              </Typography>
            </div>
          ) : (
            questions.map((question) => {
              return (
                <UnsolvedQuestionsList
                  key={question._id}
                  title={question.questiontitle}
                  description={question.questiondescription}
                  image={question.questionimage}
                  question_id={question._id}
                />
              );
            })
          )}
        </Container>
      )}
    </>
  );
}

export default UnsolvedQuestions;
