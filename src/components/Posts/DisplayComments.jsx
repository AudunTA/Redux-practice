import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import "./Card.scss";
const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--navy100);
  border-radius: 12px;
  width: 100%;
  margin-left: 75px;
`;
const token = localStorage.getItem("accessToken");
console.log(token);
const options = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

function DisplayComments(props) {
  const [comments, setComments] = useState([]);
  const commentUrl = `https://nf-api.onrender.com/api/v1/social/posts/${props.postID}?_author=true&_comments=true&_reactions=true`;
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(commentUrl, options);
        const result = await response.json();
        console.log(result);
        setComments(result.comments);
        console.log(result.comments);
      } catch (e) {
        console.log("error: ", e);
      }
    }
    getPosts();
  }, []);
  return (
    <CommentsDiv>
      {comments.length >= 1
        ? comments.map((ele) => {
            return (
              <div className="comment" key={ele.id}>
                <div className="comment-avatar">
                  <img src={ele.author.avatar} className="avatar_post"></img>
                  <p>author</p>
                </div>
                <div className="comment-section">
                  <p>{ele.author.name}</p>
                  <p>Posted 6 months ago</p>
                  <p>{ele.body}</p>
                </div>
              </div>
            );
          })
        : ""}
    </CommentsDiv>
  );
}

export default DisplayComments;
