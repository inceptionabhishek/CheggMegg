import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import exampleData from "../../Components/Editor/editor/data/exampleData";
import Editor from "../../Components/Editor/editor/Editor";
import EditorTextParser from "../../Components/Editor/editorparser/EditorTextParser";
function Blog1() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState(exampleData);

  function toggleEditMode() {
    if (isEditMode) {
      setIsEditMode(false);
      console.log("Edit mode is now disabled");
    } else {
      setIsEditMode(true);
      console.log("Edit mode is now enabled");
    }
  }
  const [fakedata, setFakedata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
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
          <div className="container">
            <button id="toggle-edit-btn" onClick={toggleEditMode}>
              Toggle Edit Mode
            </button>
            <EditorTextParser data={data} />
            <Editor data={data} setData={setData} />
            {/* <div className="app-content">
              {isEditMode ? (
                
              ) : (
                
              )}
            </div> */}
          </div>
        </>
      )}
    </>
  );
}

export default Blog1;
