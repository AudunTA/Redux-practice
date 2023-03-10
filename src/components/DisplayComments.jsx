import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
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
            return <p key={ele.id}>{ele.body}</p>;
          })
        : ""}
    </CommentsDiv>
  );
}

export default DisplayComments;
