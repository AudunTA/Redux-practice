import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderDiv,
  LogginInputs,
  ButtonPrimary,
  NavDiv,
  SearchIconHeader,
} from "../styles/Header.styled";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.scss";
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
  const postsState = useSelector((state) => state.posts);
  const dispatch = useDispatch();
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
      <NavDiv>
        <ul>
          <li className="nav-Active">Explore</li>
          <li>Friends</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </NavDiv>
      <div className="input-fields">
        <SearchIcon className="search-icon" />

        <p>Sign In</p>
      </div>
    </HeaderDiv>
  );
}

export default Header;
