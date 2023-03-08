import React from "react";
import styled from "styled-components";

const Carddiv = styled.div`
  border: 1px solid black;
  border-radius: 8px;
`;
function Card(props) {
  const id = props.item.id;
  const title = props.item.title;
  const body = props.item.body;
  console.log(title);
  return (
    <Carddiv>
      <h2>{title}</h2>
      <p>{body}</p>
    </Carddiv>
  );
}

export default Card;
