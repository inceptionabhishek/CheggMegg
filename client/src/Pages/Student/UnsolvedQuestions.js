import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import UnsolvedQuestionsList from "../../Components/Student/UnsolvedQuestionsList";
function UnsolvedQuestions() {
  const email = localStorage.getItem("email");
  const [questions, setQuestions] = useState([]);
  const uri = "http://localhost:5000/api/question/getunsolvedquestion";

  useEffect(() => {
    axios
      .post(uri, {
        email: email,
      })
      .then((res) => {
        setQuestions(res.data);
       // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [questions]);

  return (
    <>
      <h1 className="askQuestion">Unsolved Questions</h1>
      <br />
      <br />

      {questions.map((question) => {
        return (
          <UnsolvedQuestionsList
            key={question._id}
            title={question.questiontitle}
            description={question.questiondescription}
            image={question.questionimage}
            question_id={question._id}
          />
        );
      })}
    </>
  );
}

export default UnsolvedQuestions;
