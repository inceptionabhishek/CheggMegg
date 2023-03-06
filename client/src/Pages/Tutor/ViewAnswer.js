import React, { useState, useEffect } from "react";
import axios from "axios";
import Editor from "../../Components/Editor/editor";
import EditorEdit from "../../Components/Editor/editorEdit";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "react-bootstrap";
import { Stack } from "@mui/material";
import { Spinner } from "react-bootstrap";
import { SERVER_URI } from "../../apiService";
function ViewAnswer(props) {
  const [answer, setAnswer] = useState("");
  const [edit, setEdit] = useState(false);
  const [answerData, setAnswerData] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const id = localStorage.getItem("TutorviewId");
    axios
      .post(`${SERVER_URI}/api/solved/viewbyid`, {
        id: id,
      })
      .then((res) => {
        console.log("data", res.data.data);
        setAnswerData(res.data.data[0]);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateAnswerHandler = async () => {
    setLoader(true);
    const id = localStorage.getItem("TutorviewId");
    await axios.patch(`${SERVER_URI}/api/solved/update`, {
      id: id,
      tutorans: answer,
    });
    await axios
      .post(`${SERVER_URI}/api/solved/viewbyid`, {
        id: id,
      })
      .then((res) => {
        setAnswerData(res.data.data[0]);
        setEdit(false);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {loader ? (
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3>Title : {answerData.questionTitle} </h3>
                  </div>
                  <div className="card-body">
                    <p>Description : {answerData.questionDescription}</p>
                    <img
                      src={answerData.questionImage}
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
                      data={answerData?.tutorans}
                      setAnswer={setAnswer}
                    />
                  ) : (
                    <Editor data={answerData?.tutorans} />
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
                        onClick={UpdateAnswerHandler}
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
      )}
    </>
  );
}

export default ViewAnswer;
