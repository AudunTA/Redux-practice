import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
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
  console.log(options);
  const [posts, setPosts] = useState([
    {
      title: "nice",
    },
  ]);
  useEffect(() => {
    async function getPosts() {
      console.log("inne");
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setPosts(result);
      } catch (e) {
        console.log("error: ", e);
      }
    }
    getPosts();
  }, []);
  return (
    <div className="App">
      <Header baseUrl={baseUrl} />
      {posts
        ? posts.map((ele) => {
            console.log(posts);
            return <Card item={ele} />;
          })
        : ""}
      <button onClick={() => console.log("posts: ", posts)}> log posts</button>
    </div>
  );
}

export default App;
