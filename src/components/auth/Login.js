import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/auth/login", { name, password });
    setName("");
    setPassword("");
  };

  return (
    <LoginFormContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Login</h1>
        </div>
        <div className="inputs">
          <label htmlFor="">Name: </label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Password:</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </LoginFormContainer>
  );
}

export default Login;

const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);

  form {
    background-color: aliceblue;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    .inputs {
      display: flex;
      flex-direction: column;
    }
  }
`;
