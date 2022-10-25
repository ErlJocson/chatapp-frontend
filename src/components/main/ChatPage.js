import { useState } from "react";
import styled from "styled-components";
import React from "react";
import axios from "axios";

function ChatPage(props) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/send-message", { message });
    setMessage("");
  };

  return (
    <Container>
      <div className="text-box"></div>
      <div className="button">
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </Container>
  );
}

export default ChatPage;

const Container = styled.div`
  background-color: aliceblue;
  height: 80vh;
  display: flex;
  flex-direction: column;
  .text-box {
    height: 60vh;
  }
  .button {
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
      textarea {
        padding: 10px;
        width: 600px;
        resize: none;
        height: 50px;
      }
    }
  }
`;
