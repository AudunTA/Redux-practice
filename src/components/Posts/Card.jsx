import React from "react";

import { likePost, unLikePost } from "../postsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DisplayComments from "./DisplayComments";
import {
  Carddiv,
  ButtonComments,
  PrimaryButton,
  CommentContainer,
  CommentInputDiv,
  BtnLikes,
  BtnComments,
} from "../styles/Card.styled";
import "./Card.scss";
// materialUI icons
import Favorite from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

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
    <>
      <Carddiv key={id}>
        <div className="avatar-div">
          <img src={author_avatar} className="avatar_post"></img>
          <p>author</p>
        </div>
        <div className="content-post">
          <div className="author-div">
            <p className="author-name">{author_name}</p>
            <p className="author-date">Posted 6 months ago</p>
          </div>

          <h2>{title}</h2>
          <p className="post-body">{body}</p>
          {media ? (
            <img
              src={media}
              className="img-card"
              style={{ width: "100%" }}
            ></img>
          ) : (
            ""
          )}
          <div className="post-buttons">
            <BtnLikes onClick={() => handleLike({ id })} liked={liked}>
              <Favorite className="like-icon" />
              <p>{likes}</p>
            </BtnLikes>

            <BtnComments onClick={() => setShowComments(!showComments)}>
              <ModeCommentIcon />
              <p>{comments}</p>
            </BtnComments>
          </div>
        </div>
      </Carddiv>
      <CommentContainer>
        {showComments ? <DisplayComments postID={id} /> : ""}
      </CommentContainer>
    </>
  );
}

export default Card;
