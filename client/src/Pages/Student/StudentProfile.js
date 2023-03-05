import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Spinner } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
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
  const [modalShow, setModalShow] = React.useState(false);
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
  function MyVerticallyCenteredModal(props) {
    const [newName, setNewName] = useState("");
    const updateHandler = async (e) => {
      e.preventDefault();
      await axios
        .patch(`${SERVER_URI}/api/students/updateprofile`, {
          email: localStorage.getItem("email"),
          name: newName,
        })
        .then((res) => {
          setLoading(true);
          setLoading(false);
          props.onHide();
        });
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              fontColor: "black",
              fontWeight: "bold",
            }}
          >
            Update Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                defaultValue={props.name}
                onChange={(event) => setNewName(event.target.value)}
              />
            </Form.Group>
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                fontColor: "black",
                fontWeight: "bold",
                backgroundColor: "#E9A178",
              }}
              type="submit"
              onClick={updateHandler}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
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

                <Button
                  variant="outlined"
                  color="success"
                  className="btn"
                  onClick={() => setModalShow(true)}
                >
                  Update
                </Button>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={profile.name}
      />
    </>
  );
}

export default StudentProfile;
