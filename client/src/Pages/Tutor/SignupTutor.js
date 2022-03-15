import React from "react";
import { useState } from "react";
import axios from "axios";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
function SignupTutor() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [allvalues, setAllvalues] = useState(false);
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
        });
      await axios
        .post("https://meggchegg.herokuapp.com/api/tutor/add/newtutor", {
          username: username,
          name: name,
          email: email,
          password: password,
          profileimage: image,
        })
        .then((res) => {
          localStorage.setItem("email", email);
          localStorage.setItem("user", "tutor");
          localStorage.setItem("login", true);
          window.location.href = "/tutor/answerquestion";
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-4 col-lg-3"></div>
        <div class="col-md-8 col-lg-6">
          <h1 className="text-center">Sign Up Tutor</h1>
          <div class="demo-content bg-alt">
            <form onSubmit={handleFormSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Name </label>
                <input
                  type="text"
                  class="form-control"
                  id="userNameId"
                  aria-describedby="userNameHelp"
                  placeholder="Enter Your UserName"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">UserName</label>
                <input
                  type="text"
                  class="form-control"
                  id="userNameId"
                  aria-describedby="userNameHelp"
                  placeholder="Enter Your UserName"
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email </label>
                <input
                  type="email"
                  class="form-control"
                  id="userNameId"
                  aria-describedby="userNameHelp"
                  placeholder="Enter Your UserName"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
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
                  value={password}
                />
              </div>
              Please Select One of the Following..
              <div class="form-check">
                <p className="details-desciptions-text">
                  Please Add Your Profile Image
                  <AssignmentIndIcon />
                </p>
                <input
                  type="file"
                  onChange={(event) => setImage(event.target.files[0])}
                />
              </div>
              {allvalues === true ? (
                <>
                  <div class="alert">
                    <span class="closebtn" onClick={() => setAllvalues(false)}>
                      &times;
                    </span>
                    <strong>Please!</strong> Fill All the Fields :(
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
  );
}

export default SignupTutor;
