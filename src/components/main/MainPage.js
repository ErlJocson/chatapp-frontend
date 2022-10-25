import React from "react";
import styled from "styled-components";
import ChatPage from "./ChatPage";

function MainPage() {
  const names = ["erl", "jerrald", "jocson"];
  return (
    <Container>
      <div className="contact-container">
        <div className="header">
          <h3>Contacts</h3>
        </div>
        <div className="contacts">
          {names.map((name, id) => {
            return (
              <p>
                <a href="#" key={id}>
                  {name}
                </a>
              </p>
            );
          })}
        </div>
      </div>
      <div className="message-container">
        <div>
          <h3>Conversation</h3>
        </div>
        <ChatPage />
      </div>
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  min-height: calc(100vh - 60px);
  .contact-container {
    width: 30%;
    padding: 20px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    .contacts {
      display: flex;
      flex-direction: column;
      p {
        margin: 5px 0;
        border-bottom: 1px solid black;
        padding: 0 5px;
        a {
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
  }

  .message-container {
    width: 70%;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 20px;
  }
`;
