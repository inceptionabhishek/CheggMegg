import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button, Form, Spinner } from "react-bootstrap";

import axios from "axios";

function LoggedStudent() {
  const [image, setImage] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [alert, setAlert] = useState(false);
  const [goodAlert, setGoodAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fakedata, setFakedata] = useState([]);
  const ulrr = "https://randomuser.me/api/";
  useEffect(() => {
    axios.get(ulrr).then((res) => {
      setFakedata(res.data.results);
      setLoading(false);
    });
  }, []);
  const HandlerFunction = async (e) => {
    setUploaded(true);
    e.preventDefault();
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
        console.log(data);
        setUploaded(false);
      });
    setUploaded(false);
  };
  const handleChange = async (e) => {
    e.preventDefault();
    if (questionTitle.length > 0 && questionDescription.length > 0) {
      setLoading(true);
      const api = "https://meggchegg.herokuapp.com/api/question/askquestion";
      const data = {
        studentwhoaskedemail: localStorage.getItem("email"),
        questiontitle: questionTitle,
        questiondescription: questionDescription,
        questionimage: image,
      };

      await axios
        .post(api, data)
        .then((res) => {
          console.log(res);
          setLoading(false);
          setGoodAlert(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <h1 className="text-center"> Ask! Amigo😇 </h1>
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
          <p className="askQuestion">Please ask your question here.</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Question Title Here"
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setQuestionDescription(e.target.value)}
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
              <Form.Label>Image of the Question(not necessary)</Form.Label>
              <Form.Control
                type="file"
                placeholder="Image"
                onChange={(event) => setImage(event.target.files[0])}
              />
              <Button variant="primary" type="submit" onClick={HandlerFunction}>
                Upload Image to database
              </Button>
              {uploaded === true ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <></>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            ></Form.Group>
            {alert === true ? (
              <>
                <div class="alert">
                  <span class="closebtn" onClick={() => setAlert(false)}>
                    &times;
                  </span>
                  <strong>:( </strong>Please fill all the fields
                </div>
              </>
            ) : (
              <></>
            )}
            {goodAlert === true ? (
              <>
                <div class="w3-panel w3-green">
                  <h3>Success!</h3>
                  <p>Question Asked successfully :) </p>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="Top-Section">
              <button
                type="submit"
                className="submit-btn"
                onClick={handleChange}
              >
                Submit
              </button>
            </div>
          </Form>
        </>
      )}
    </>
  );
}

export default LoggedStudent;
