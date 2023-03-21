import React from "react";
import { useDispatch } from "react-redux";
import { addFriends } from "../friendsSlice";
import { useEffect } from "react";
const token = localStorage.getItem("accessToken");
console.log(token);
const options = {
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const url = "https://nf-api.onrender.com/api/v1/social/profiles";

async function FriendsAPI() {
  console.log("LOOL");
  const dispatch = useDispatch();
  useEffect(() => {
    async function getFriends() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(response);
        dispatch(addFriends(result));
      } catch (e) {
        console.log("error: ", e);
      }
    }
    getFriends();
  }, []);
}

export default FriendsAPI;
