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
  const activeNav = props.active;
  const navChange = props.changeNav;
  const baseUrl = props.baseUrl;
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
  const navItems = [
    {
      id: 1,
      name: "Explore",
    },
    {
      id: 2,
      name: "Friends",
    },
    {
      id: 3,
      name: "About",
    },

    {
      id: 4,
      name: "Contact",
    },
  ];
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
          {navItems.map((ele) => {
            if (ele.name === activeNav) {
              return (
                <li key={ele.id} className="nav-Active">
                  {ele.name}
                </li>
              );
            } else {
              return (
                <li key={ele.id} onClick={() => navChange(ele.name)}>
                  {ele.name}
                </li>
              );
            }
          })}
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
