import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";
function ViewAnswers(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3>Title : {localStorage.getItem("StudentView.Title")} </h3>
              </div>
              <div className="card-body">
                <p>
                  Description :{" "}
                  {localStorage.getItem("StudentView.Description")}
                </p>
                <img
                  src={localStorage.getItem("StudentView.Image")}
                  alt="question"
                  width="400px"
                />
              </div>
              <b>Answer : {localStorage.getItem("StudentView.TutorAns")}</b>
              <Chip label="Answered by : -" />
              <Chip label={localStorage.getItem("StudentView.TutorEmail")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAnswers;
