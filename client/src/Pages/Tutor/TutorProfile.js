import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { SERVER_URI } from "../../apiService";
function TutorProfile() {
  const url = `${SERVER_URI}/api/tutor/getprofile`;
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [solvedCount, setSolvedCount] = useState(0);

  const urlQuestionCount = `${SERVER_URI}/admin/getQuestionsSolvedCountByTutor`;
  const email = localStorage.getItem("email");
  useEffect(() => {
    axios
      .post(urlQuestionCount, {
        email: email,
      })
      .then((res) => {
        setSolvedCount(res.data.questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [solvedCount]);
  useEffect(() => {
    axios
      .post(url, {
        email: email,
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profile]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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
          <div className="divquestionlist">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={profile.profileimage} />
              <Card.Body>
                <Card.Title>Name : {profile.name}</Card.Title>
                <Card.Text>Email : {profile.email}</Card.Text>
                <Card.Text>Total Doubts Resolved : {solvedCount}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default TutorProfile;
