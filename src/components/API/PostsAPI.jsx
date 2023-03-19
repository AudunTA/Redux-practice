import React from "react";
import { addPosts } from "../postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const token = localStorage.getItem("accessToken");
console.log(token);
const options = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const url =
  "https://nf-api.onrender.com/api/v1/social/posts/?_author=true&_comments=true&_reactions=true";

function PostsAPI() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        dispatch(addPosts(result));
      } catch (e) {
        console.log("error: ", e);
      }
    }
    getPosts();
  }, []);
  return <div></div>;
}

export default PostsAPI;
