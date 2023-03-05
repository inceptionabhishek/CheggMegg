import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const toolbarOptions = ["bold"];

const Editor = ({ data }) => {
  const [text, setText] = useState(data);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setText(content);
    console.log(content);
  };

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={text}
      onChange={handleProcedureContentChange}
    />
  );
};

export default Editor;
