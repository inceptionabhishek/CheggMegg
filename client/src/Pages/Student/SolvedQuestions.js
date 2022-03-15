import React,{useState,useEffect} from 'react'
import { Grid, Typography } from "@mui/material";
import axios from 'axios';
import SolvedQuestionsList from '../../Components/Student/SolvedQuestionsList';
function SolvedQuestions() {
  const [solved,setSolved]=useState([]);
  const api = "https://meggchegg.herokuapp.com/api/solved/view/student";
  useEffect(()=>{
    axios.post(api,{
      studentemail:localStorage.getItem('email')
      
    })
    .then((res)=>{
      setSolved(res.data.data);
      console.log(res.data);
      console.log(localStorage.getItem("email"));
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);
  
  const tempimage =
    "https://res.cloudinary.com/dkeiewkz6/image/upload/v1646113532/rkvgtstl4xdqcey0x8lr.png";
  return (
    <>
      <h1 className="askQuestion">Solved Questions</h1>
      <br />
      <br />
      {solved.map((question) => (
        <SolvedQuestionsList
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

export default SolvedQuestions