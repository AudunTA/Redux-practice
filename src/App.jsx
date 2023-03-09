import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "./components/postsSlice";

const token = localStorage.getItem("accessToken");
console.log(token);
const options = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const baseUrl = "https://nf-api.onrender.com/api/v1/social";
const url = "https://nf-api.onrender.com/api/v1/social/posts";

function App() {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        dispatch(addPosts(result));
        console.log(postsState);
      } catch (e) {
        console.log("error: ", e);
      }
    }
    getPosts();
  }, []);
  return (
    <div className="App">
      <Header baseUrl={baseUrl} />
      {postsState.posts ? (
        postsState.posts.map((ele) => {
          return <Card key={ele.id} item={ele} />;
        })
      ) : (
        <div>
          <p>TEST</p>
        </div>
      )}
      <button onClick={() => console.log("posts: ", posts)}> log posts</button>
    </div>
  );
}

export default App;
