import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Spinner } from "react-bootstrap";
import { Button } from "@mui/material";
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
  function MyVerticallyCenteredModal(props) {
    const [uploaded, setUploaded] = useState(false);
    const [newName, setNewName] = useState("");
    const [image, setImage] = useState("");
    const updateHandler = async (e) => {
      e.preventDefault();
      await axios
        .patch(`${SERVER_URI}/api/students/updateprofile`, {
          email: localStorage.getItem("email"),
          name: newName,
          profileimage: image,
        })
        .then((res) => {
          setLoading(true);
          setLoading(false);
          props.onHide();
        });
    };
    const HandlerFunction = async () => {
      if (image === "") {
      } else {
        setUploaded(true);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "CheggClone");
        formData.append("cloud_name", "dkeiewkz6");
        await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
          method: "post",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            setImage(data.url);
            setUploaded(false);
          });
      }
      setUploaded(false);
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
            <div class="form-group">
              <label for="exampleInputEmail1">
                <p className="details-desciptions-text">
                  <strong>Edit Name</strong>
                </p>
              </label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(event) => setNewName(event.target.value)}
              />
            </div>
            <br />
            <div class="form-group">
              <label for="exampleInputEmail1">
                <p className="details-desciptions-text">
                  <strong>Add Your profile Image</strong>
                </p>
              </label>
              <br />
              <input
                type="file"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
              />
              <Button variant="primary" onClick={HandlerFunction}>
                Upload Image to database
              </Button>
              {uploaded === true ? (
                <button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </button>
              ) : (
                <></>
              )}
            </div>
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
