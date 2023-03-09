import React from "react";
import styled from "styled-components";
import { likePost, unLikePost } from "./postsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Carddiv = styled.div`
  border: 1px solid black;
  border-radius: 8px;
`;

const ButtonLiked = styled.button`
  background-color: ${(props) =>
    props.liked ? "red" : "rgba(81, 69, 229, 0.9)"};
  color: white;
  border: 1px solid #e4e4e7;
  padding: 5px 15px;
  cursor: pointer;
`;

function Card(props) {
  const [liked, setLiked] = useState(false); // Declaring liked using useState
  const id = props.item.id;
  const title = props.item.title;
  const body = props.item.body;
  const likes = props.item._count.reactions;

  const dispatch = useDispatch();
  const handleLike = (postID) => {
    const sendID = postID.id;
    if (liked) {
      dispatch(unLikePost(sendID));
    } else {
      console.log(sendID);
      dispatch(likePost(sendID));
    }

    setLiked(!liked); // Setting liked to true after dispatching action
  };
  return (
    <Carddiv key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>likes: {likes}</p>
      <ButtonLiked liked={liked} key={liked} onClick={() => handleLike({ id })}>
        {liked ? "Unlike Post" : "Like Post"}
      </ButtonLiked>
    </Carddiv>
  );
}

export default Card;
