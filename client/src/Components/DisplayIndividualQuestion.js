import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { SERVER_URI } from "../apiService";
function DisplayIndividualQuestion() {
  const [question, setQuestion] = useState({});
  const question_id = localStorage.getItem("question_id");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const uri = `${SERVER_URI}/api/question/getquestion`;
  useEffect(() => {
    axios
      .post(uri, {
        question_id: question_id,
      })
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        <>
          <div className="container" style={{ marginTop: "100px" }}>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3>{question.questiontitle}</h3>
                  </div>
                  <div className="card-body">
                    <p>{question.questiondescription}</p>
                    <br />

                    <img
                      src={question.questionimage}
                      alt="question"
                      width={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DisplayIndividualQuestion;
