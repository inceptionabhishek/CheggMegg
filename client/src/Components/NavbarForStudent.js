import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function NavbarForStudent() {
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
                <Link to="/student/askquestion">
                  <Button
                    variant="outline-light"
                    style={{ margin: "10px",  }}
                  >
                    <VpnKeyIcon />
                    <span className="links"
                      style = {{marginLeft: "10px"}}
                    >Ask Question</span>
                  </Button>
                </Link>

                <Link to="/student/solvedquestions">
                  <Button variant="outline-light" style={{ margin: "10px" }}>
                    <VpnKeyIcon />
                    <span className="links">Solved</span>
                  </Button>
                </Link>

                <Link to="/student/unsolvedquestions">
                  <Button variant="outline-light" style={{ margin: "10px" }}>
                    <VpnKeyIcon />
                    <span className="links">UnSolved</span>
                  </Button>
                </Link>
              </Nav>
            </Nav>
            <Nav className="ml-auto" navbarScroll>
              <Button variant="outline-light" style={{ margin: "10px" }}>
                <Link to="/student/profile" className="links">
                  Profile
                </Link>
              </Button>
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

export default NavbarForStudent;
