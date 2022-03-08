import React from "react";
import { useState, useEffect } from "react";
import axios from "react";

function AllQuestionsAsked() {
  const [allquestions, setAllquestions] = useState([]);
  const api = "http://localhost:5000/admin/getAllQuestions";
  return (
    <>
      <h1>dhhdh</h1>
    </>
  );
}

export default AllQuestionsAsked;
