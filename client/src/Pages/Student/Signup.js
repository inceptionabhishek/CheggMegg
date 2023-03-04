import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import { SERVER_URI } from "../../apiService";
import Footer from "../../Components/Footer";
import { Divider } from "@mui/material";
function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [allvalues, setAllvalues] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const HandlerFunction = async () => {
    if (image === "") {
      setAllvalues(true);
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
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      username === "" ||
      name === "" ||
      email === "" ||
      password === "" ||
      image === ""
    ) {
      setAllvalues(true);
    } else {
      await axios
        .post(`${SERVER_URI}/api/students/add/newstudent`, {
          username: username,
          name: name,
          email: email,
          password: password,
          profileimage: image,
        })
        .then((res) => {
          localStorage.setItem("user", "student");
          localStorage.setItem("email", email);
          localStorage.setItem("login", true);
          window.location.href = "/student/askquestion";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-md-4 col-lg-3"></div>
          <div class="col-md-8 col-lg-6">
            <h1
              className="text-center mt-5 mb-5  font-weight-bold "
              style={{
                color: "#4E31AA",
              }}
            >
              Sign Up
            </h1>
            <Divider />
            <div
              class="demo-content bg-alt 
            p-5
            
            "
            >
              <form onSubmit={handleFormSubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">
                    <p className="details-desciptions-text">
                      <strong>Enter Your Name</strong>
                    </p>
                  </label>
                  <input
                    type="text"
                    class="form-control text-capitalize  font-weight-bold text-primary h5 "
                    id="userNameId"
                    aria-describedby="userNameHelp"
                    placeholder="Enter Your Name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">
                    <p className="details-desciptions-text">
                      <strong>Enter Your User Name</strong>
                    </p>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="userNameId"
                    aria-describedby="userNameHelp"
                    placeholder="Enter Your UserName"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">
                    <p className="details-desciptions-text">
                      <strong>Enter Your Email</strong>
                    </p>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="userNameId"
                    aria-describedby="userNameHelp"
                    placeholder="Enter Your UserName"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">
                    <p className="details-desciptions-text">
                      <strong>Enter Your Password</strong>
                    </p>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="examplePassword"
                    aria-describedby="passwordHelp"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

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
                {allvalues === true ? (
                  <>
                    <div class="alert">
                      <span
                        class="closebtn"
                        onClick={() => setAllvalues(false)}
                      >
                        &times;
                      </span>
                      <strong>Please!</strong> Fill all the values
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
