import React from "react";
import { addPosts } from "../postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Posts/Card";
import PostsAPI from "../API/PostsAPI";
import { FeedDiv } from "../styles/Feed.styled";
import "./HomePage.scss";
function HomePage() {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  PostsAPI();
  return (
    <div className="homepage-container">
      <div>test</div>
      <FeedDiv>
        {postsState.posts ? (
          postsState.posts.map((ele) => {
            return <Card key={ele.id} item={ele} />;
          })
        ) : (
          <div>
            <p>TEST</p>
          </div>
        )}
      </FeedDiv>

      <div>
        <button onClick={() => console.log("posts: ", postsState)}>
          {" "}
          log posts
        </button>
      </div>
    </div>
  );
}

export default HomePage;
