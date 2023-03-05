import React, { useState, useEffect } from "react";
import axios from "axios";
import Editor from "../../Components/Editor/editor";
import EditorEdit from "../../Components/Editor/editorEdit";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "react-bootstrap";
import { Stack } from "@mui/material";
function ViewAnswer(props) {
  const [answer, setAnswer] = useState("");
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3>Title : {localStorage.getItem("TutorviewTitle")} </h3>
              </div>
              <div className="card-body">
                <p>
                  Description : {localStorage.getItem("TutorviewDescription")}
                </p>
                <img
                  src={localStorage.getItem("TutorviewImage")}
                  alt="question"
                  width="400px"
                />
              </div>
              <h3
                style={{
                  textAlign: "center",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Answer :
              </h3>
              {edit ? (
                <EditorEdit
                  data={localStorage.getItem("Tutorviewanswer")}
                  setAnswer={setAnswer}
                />
              ) : (
                <Editor data={localStorage.getItem("Tutorviewanswer")} />
              )}

              <Stack spacing={2} direction="row">
                <Button
                  style={{
                    float: "right",
                    margin: "10px",
                    width: "100px",
                    backgroundColor: "#3f51b5",
                    color: "white",
                  }}
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit <EditIcon />
                </Button>
                {edit ? (
                  <Button
                    style={{
                      float: "right",
                      margin: "10px",
                      width: "100px",
                      backgroundColor: "#3f51b5",
                      color: "white",
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <></>
                )}
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAnswer;
