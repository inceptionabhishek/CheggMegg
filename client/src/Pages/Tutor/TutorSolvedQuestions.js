import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import SolvedQuestionsListForTutor from "./SolvedQuestionsListForTutor";
function TutorSolvedQuestions() {
  const tempimage =
    "https://res.cloudinary.com/dkeiewkz6/image/upload/v1646113532/rkvgtstl4xdqcey0x8lr.png";
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/solved/view/tutor", {
        tutoremail: localStorage.getItem("email"),
      })
      .then((res) => {
        setSolvedQuestions(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="askQuestion">Total Questions Solved By you : </h1>
      <br />
      <br />

      {solvedQuestions.map((question) => (
        <SolvedQuestionsListForTutor
          id={question._id}
          title={question.questionTitle}
          image={question.questionImage}
          description={question.questionDescription}
          tutoremail={question.tutoremail}
          tutorans={question.tutorans}
          student={question.studentemail}
        />
      ))}
    </>
  );
}

export default TutorSolvedQuestions;
