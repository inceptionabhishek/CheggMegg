import React from "react";
import { useState } from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/students/validate", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "Successfully logged in") {
          setEmail("");
          setPassword("");
          window.location.href = "/student/askquestion";
          localStorage.setItem("user", "student");
          localStorage.setItem("email", email);
          localStorage.setItem("login", true);
        } else {
          setAlert(true);
        }
      });
  };
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-4 col-lg-3"></div>
        <div class="col-md-8 col-lg-6">
          <h1 className="text-center">Login</h1>
          <div class="demo-content bg-alt">
            <form onSubmit={handleFormSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="userNameId"
                  aria-describedby="userNameHelp"
                  placeholder="Enter Your email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="examplePassword"
                  aria-describedby="passwordHelp"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
            {alert === true ? (
              <>
                <div class="alert">
                  <span class="closebtn" onClick={() => setAlert(false)}>
                    &times;
                  </span>
                  <strong>:( </strong>Wrong Password or Email.
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
