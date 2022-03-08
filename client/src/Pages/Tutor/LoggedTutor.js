import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Button} from '@mui/material'
function LoggedTutor() {
  const api = "http://localhost:5000/api/tutor/getallquestions";
  const [questions, setQuestions] = useState([]);
  const tutoremail = localStorage.getItem("email");
  const [questionId, setQuestionId] = useState("");
  const handler = () => {

  }
  useEffect(() => {
    axios
      .post(api, {
        tutoremail: tutoremail,
      })
      .then((res) => {
        setQuestions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="askQuestion">Available Questions to answer</h1>
      {questions.length === 0 ? (
        <>
          {" "}
          <h1>No Questions</h1>{" "}
        </>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Question</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question._id}>
                  <td>{question.questiontitle}</td>
                  <td>
                    <Link to="/tutor/getquestion">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>{
                          localStorage.setItem("question_id", question._id)
                        }}
                      > 
                        View Question
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default LoggedTutor;
