import React from "react";
import { addPosts } from "../postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Posts/Card";
import PostsAPI from "../API/PostsAPI";
import { FeedDiv } from "../styles/Feed.styled";
import FriendsContainer from "../FriendsHomePage";
import "./HomePage.scss";
import FriendsAPI from "../API/FindFriends";
function HomePage() {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  PostsAPI();
  FriendsAPI();
  return (
    <div className="homepage-container">
      <div className="flex-class">
        <div className="left-div">
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </div>
      </div>

      <FeedDiv>
        <div className="top-feed">
          <p>this is the explore feed, recent posts will show up here</p>
        </div>
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
        <FriendsContainer />
      </div>
    </div>
  );
}

export default HomePage;
