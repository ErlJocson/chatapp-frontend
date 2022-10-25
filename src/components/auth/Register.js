import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(confirmPassword === password)) {
      alert("Password does not match");
      return;
    }

    axios.post("api/auth/register", { name, password });
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <RegisterFormContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Register</h1>
        </div>
        <div className="inputs">
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </RegisterFormContainer>
  );
}

export default Register;

const RegisterFormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 60px);
  align-items: center;
  form {
    width: 500px;
    background-color: aliceblue;
    padding: 20px;
    border-radius: 10px;
    .inputs {
      display: flex;
      flex-direction: column;
    }
  }
`;
