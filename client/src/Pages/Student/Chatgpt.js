import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { SERVER_URI } from "../../apiService";
function Chatgpt() {
  const [input, setInput] = useState("");
  const [showInputBox, setShowInputBox] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    {
      name: "GPT-3",
      message:
        "Hello, I am GPT-3. I am a text generator. I can generate text based on your input. Try me!",
    },
  ]);
  return (
    <Container>
      <div className="chat">
        <div className="chat__header">
          <h2>Chat with GPT-3</h2>
        </div>
        <div className="chat__body">
          <div className="chat__message">
            <p className="chat__receiver">
              {chatMessages.map((message) => (
                <p>
                  {message.name === "GPT-3" ? (
                    <div className="gpt_chat">
                      <p>
                        <b>{message.name} : </b>
                      </p>
                      <div
                        // style={{
                        //   wordBreak: "break-word",
                        //   width: "500px",
                        // }}
                        className="gpt_message"
                      >
                        {message.message}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="user_chat">
                        <p>
                          <b>{message.name} : </b>
                        </p>
                        <br />
                        <div
                          style={{
                            wordBreak: "break-word",
                            width: "100px",
                          }}
                          className="user_message"
                        >
                          {message.message}
                        </div>
                      </div>
                    </>
                  )}
                </p>
              ))}
            </p>
          </div>
        </div>

        <div className="chat__footer">
          {showInputBox === true ? (
            <form>
              <input
                type="text"
                placeholder="Type a message"
                className="chat_input_box"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="chat_button"
                onClick={(e) => {
                  e.preventDefault();
                  setChatMessages([
                    ...chatMessages,
                    { name: "You", message: input },
                  ]);
                  setInput("");
                  setShowInputBox(false);

                  axios
                    .post(`${SERVER_URI}/chat`, {
                      prompt: input,
                    })
                    .then((res) => {
                      console.log(res.data);
                      setChatMessages([
                        ...chatMessages,
                        { name: "You", message: input },
                        { name: "GPT-3", message: res.data },
                      ]);
                      setShowInputBox(true);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Send a message
              </button>
            </form>
          ) : (
            <>Chat GPT getting ready...</>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Chatgpt;
