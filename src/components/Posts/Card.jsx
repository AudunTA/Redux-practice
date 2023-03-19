import React from "react";

import { likePost, unLikePost } from "../postsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DisplayComments from "./DisplayComments";
import {
  Carddiv,
  ButtonLiked,
  ButtonComments,
  PrimaryButton,
  CommentContainer,
  CommentInputDiv,
} from "../styles/Card.styled";
import "./Card.scss";
function Card(props) {
  const [liked, setLiked] = useState(false); // Declaring liked using useState
  const [showComments, setShowComments] = useState(false);
  const id = props.item.id;
  const title = props.item.title;
  const body = props.item.body;
  const likes = props.item._count.reactions;
  const comments = props.item._count.comments;
  const media = props.item.media;
  const author_avatar = props.item.author.avatar;
  const author_name = props.item.author.name;
  console.log(author_avatar);
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
      <div className="avatar-div">
        <img src={author_avatar} className="avatar_post"></img>
        <p>author</p>
      </div>
      <div className="content-post">
        <div className="author-div">
          <p>{author_name}</p>
          <p>Posted 6 months ago</p>
        </div>

        <h2>{title}</h2>
        <p>body: {body}</p>
        <p>likes: {likes}</p>
        {media ? <img src={media} style={{ width: "100%" }}></img> : ""}
        <ButtonLiked
          liked={liked}
          key={liked}
          onClick={() => handleLike({ id })}
        >
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
      </div>
    </Carddiv>
  );
}

export default Card;
