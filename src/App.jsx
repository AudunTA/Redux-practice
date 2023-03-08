import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "./components/Header";
const Card = styled.div`
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 8px;
`;
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
        const response = await fetch(url, {
          options,
        });
        const result = await response.json();
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
            return (
              <Card>
                <p>Hello</p>
              </Card>
            );
          })
        : ""}
      <button onClick={() => console.log("posts: ", posts)}> log posts</button>
    </div>
  );
}

export default App;
