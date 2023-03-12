import React from "react";
import styled from "styled-components";
import { likePost, unLikePost } from "./postsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DisplayComments from "./DisplayComments";
const Carddiv = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  max-width: 400px;
  margin: 5px auto;
`;

const ButtonLiked = styled.button`
  background-color: ${(props) =>
    props.liked ? "red" : "rgba(81, 69, 229, 0.9)"};
  color: white;
  border: 1px solid #e4e4e7;
  padding: 5px 15px;
  cursor: pointer;
`;
const PrimaryButton = styled.button`
  background-color: rgba(81, 69, 229, 0.9);
  color: white;
  border: 1px solid #e4e4e7;
  padding: 5px 15px;
  cursor: pointer;
`;
const ButtonComments = styled.button`
  background-color: white;
  border: 1px solid #e4e4e7;
  padding: 5px 15px;
  cursor: pointer;
`;
const CommentContainer = styled.div`
  display: flex;
`;
const CommentInputDiv = styled.div`
  display: flex;
`;
function Card(props) {
  const [liked, setLiked] = useState(false); // Declaring liked using useState
  const [showComments, setShowComments] = useState(false);
  const id = props.item.id;
  const title = props.item.title;
  const body = props.item.body;
  const likes = props.item._count.reactions;
  const comments = props.item._count.comments;
  const media = props.item.media;
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
      <p>body: {body}</p>
      <p>likes: {likes}</p>
      {media ? <img src={media} style={{ width: "100%" }}></img> : ""}
      <ButtonLiked liked={liked} key={liked} onClick={() => handleLike({ id })}>
        {liked ? "Unlike Post" : "Like Post"}
      </ButtonLiked>
      <ButtonComments
        disabled={comments >= 1 ? false : true}
        onClick={() => setShowComments(!showComments)}
      >
        {comments >= 1 ? "Show Comments" : "No Comments"}
      </ButtonComments>
      <CommentInputDiv>
        <input type="text" placeholder="Make a comment"></input>
        <PrimaryButton>Comment</PrimaryButton>
      </CommentInputDiv>
      <CommentContainer>
        {showComments ? <DisplayComments postID={id} /> : ""}
      </CommentContainer>
    </Carddiv>
  );
}

export default Card;
