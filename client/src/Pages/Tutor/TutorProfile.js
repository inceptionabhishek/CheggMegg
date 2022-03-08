import React,{useState,useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import axios from 'axios';

function TutorProfile() {
    const uri = "http://localhost:5000/api/tutor/getprofile";
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
    }, []);
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
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default TutorProfile;
