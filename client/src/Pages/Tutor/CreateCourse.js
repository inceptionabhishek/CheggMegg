import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button, Form, Spinner } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
function CreateCourse() {
  const [image, setImage] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [alert, setAlert] = useState(false);
  const [goodAlert, setGoodAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const HandlerFunction = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    e.preventDefault();
  }
  return (
    <div className="container">
      <h1> CreateCourse</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Name Of Your Course"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add description</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => setQuestionDescription(e.target.value)}
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Thumbnail</Form.Label>
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
          <button type="submit" className="submit-btn" onClick={handleChange}>
            Create
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateCourse;
