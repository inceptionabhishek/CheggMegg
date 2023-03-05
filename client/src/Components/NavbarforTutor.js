import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function NavbarforTutor() {
  const handlelogout = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("email", "");
    localStorage.setItem("user", "");
    window.location.href = "/";
  };
  return (
    <>
      <Navbar className="navbar" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="links">
                <h1>MeggChegg</h1>
              </Link>
              <Nav className="me-auto">
                <Link to="/tutor/answerquestion" className="links">
                  Solve Question
                </Link>
                <Link to="/tutor/solvedquestions" className="links">
                  SolvedQuestions
                </Link>
                <Link to="/tutor/mycourse" className="links">
                  My courses
                </Link>
                <Link to="/tutor/createcourse" className="links">
                  Create Course
                </Link>
                <Link to="/tutorprofile" className="links">
                  Profile
                </Link>
              </Nav>
            </Nav>
            <Nav className="ml-auto" navbarScroll>
              <Button variant="outline-light" onClick={handlelogout}>
                <Link to="/" className="links">
                  <LoginIcon />
                  <span className="links">Logout</span>
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarforTutor;
