import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { height } from "@mui/system";
import { SERVER_URI } from "../../apiService";
function StudentProfile() {
  const uri = `${SERVER_URI}/api/students/getprofile`;
  const totquestionuri = `${SERVER_URI}/admin/getQuestionsCountByStudent`;
  const totquestionsolveduri = `${SERVER_URI}/admin/getQuestionsSolvedCountByStudent`;
  const [profile, setProfile] = useState([]);
  const email = localStorage.getItem("email");
  const [totalquestionCount, setQuestionCount] = useState(0);
  const [solvedquestionCount, setSolvedQuestionCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await axios.post(uri, {
        email: email,
      });
      const questionCount = await axios.post(totquestionuri, {
        email: localStorage.getItem("email"),
      });
      const solvedquestionCountData = await axios.post(totquestionsolveduri, {
        email: localStorage.getItem("email"),
      });

      console.log(questionCount.data.questions);
      setSolvedQuestionCount(solvedquestionCountData.data);
      setQuestionCount(questionCount.data);
      setProfile(profileData.data);
      setLoading(false);
    };
    fetchProfile();
  }, [loading]);
  const HandlerUpdate = () => {
    localStorage.setItem("nameProfile", profile.name);
    localStorage.setItem("Tochangeemail", profile.email);
  };
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
          <div className="divquestionlist">
            <Card
              style={{
                width: "auto",
                height: "auto",
                margin: "auto",
                marginTop: "20px",
                marginBottom: "20px",
                borderRadius: "20px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <Card.Img
                variant="top"
                src={profile.profileimage}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  margin: "auto",
                  marginTop: "20px",
                }}
              />
              <Card.Body>
                <Card.Title>Name : {profile.name}</Card.Title>
                <Card.Text>Email : {profile.email}</Card.Text>
                <Card.Text>
                  Total Questions Asked : {totalquestionCount.questions}
                </Card.Text>
                <Card.Text>
                  Total Questions Solved : {solvedquestionCount.questions}
                </Card.Text>
                <Link to="/students/updateprofile">
                  <Button
                    variant="outlined"
                    color="success"
                    className="btn"
                    onClick={HandlerUpdate}
                  >
                    Update
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default StudentProfile;
