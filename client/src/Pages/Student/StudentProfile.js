import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function StudentProfile() {
  const uri = "http://localhost:5000/api/students/getprofile";
  const [profile, setProfile] = useState([]);
  const email = localStorage.getItem("email");
  useEffect(() => {
    axios
      .post(uri, {
        email: email,
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profile]);
  const HandlerUpdate = () => {
    localStorage.setItem("nameProfile", profile.name);
    localStorage.setItem("Tochangeemail", profile.email);
  };
  return (
    <>
      <div className="divquestionlist">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={profile.profileimage} />
          <Card.Body>
            <Card.Title>Name : {profile.name}</Card.Title>
            <Card.Text>Email : {profile.email}</Card.Text>
            <Card.Text>Total Question Asked : 0</Card.Text>
            <Card.Text>Total Doubts Resolved : 0</Card.Text>
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
  );
}

export default StudentProfile;
