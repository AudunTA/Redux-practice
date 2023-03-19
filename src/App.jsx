import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import PostsAPI from "./components/API/PostsAPI";
import "@fontsource/poppins";

const baseUrl = "https://nf-api.onrender.com/api/v1/social";

function App() {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.posts);
  PostsAPI();
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
