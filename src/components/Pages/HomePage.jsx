import React from "react";
import { addPosts } from "../postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Posts/Card";
import PostsAPI from "../API/PostsAPI";
import { FeedDiv } from "../styles/Feed.styled";
import FriendsContainer from "../FriendsHomePage";
import "./HomePage.scss";
import FriendsAPI from "../API/FindFriends";
import { LeftDiv, FlexClass } from "../styles/HompePage.styled";
import { useEffect, useState } from "react";

function HomePage() {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  PostsAPI();
  FriendsAPI();
  return (
    <div className="homepage-container">
      <FlexClass data-aos="fade-right">
        <LeftDiv position={isFixed}>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem left div this
            is the div where profile info will be
          </p>
        </LeftDiv>
      </FlexClass>

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
        <FriendsContainer position={isFixed} />
      </div>
    </div>
  );
}

export default HomePage;
