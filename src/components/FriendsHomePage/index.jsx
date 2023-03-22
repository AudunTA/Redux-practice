import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import "./FindFriends.scss";
const FriendsDiv = styled.div`
  position: ${(props) => (props.position ? "fixed" : "")};
  top: ${(props) => (props.position ? "50px" : "")};
  padding: 10px;
  margin: 20px;
  max-width: 250px;
  background-color: rgb(24 39 63);
  border-radius: 12px;
  h2 {
    color: white;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;
function FriendsContainer(props) {
  const findState = useSelector((state) => state.friends);
  console.log(findState);
  return (
    <FriendsDiv position={props.position}>
      <h2>Add Friends to your network</h2>
      {findState.friends
        ? findState.friends.slice(0, 5).map((ele) => {
            return (
              <div className="users-container">
                <img src={ele.avatar} className="avatar-user"></img>
                <div className="right-section-users">
                  <p className="user-name">{ele.name}</p>
                  <p className="user-info">front-end developer</p>
                </div>
              </div>
            );
          })
        : "nice"}
    </FriendsDiv>
  );
}

export default FriendsContainer;
