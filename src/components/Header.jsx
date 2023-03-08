import React, { useState } from "react";
import styled from "styled-components";
const HeaderDiv = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
`;
const LogginInputs = styled.input`
  border: 1px solid black;
`;
const ButtonPrimary = styled.button`
  background-color: blue;
  border: 1px solid black;
  color: white;
`;
function Header(props) {
  const baseUrl = props.baseUrl;
  console.log(baseUrl);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoggin = () => {};
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogIn = async () => {
    const user = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });
      const results = await response.json();
      console.log(results);
      if (response.status === 200) {
        localStorage.setItem("accessToken", results.accessToken);
        localStorage.setItem("email", results.email);
        localStorage.setItem("username", results.name);
      }
    } catch (e) {
      console.log("error: ", e);
    }
    console.log(email, password);
  };
  return (
    <HeaderDiv>
      <h1>Logo</h1>
      <div className="input-fields">
        <LogginInputs
          value={email}
          onChange={onEmailChange}
          placeholder="email"
        />
        <LogginInputs
          value={password}
          onChange={onPasswordChange}
          placeholder="password"
        />
        <ButtonPrimary onClick={handleLogIn}>Log In</ButtonPrimary>
      </div>
    </HeaderDiv>
  );
}

export default Header;
