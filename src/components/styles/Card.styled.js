import styled from "styled-components";

export const Carddiv = styled.div`
  display: flex;
  font-family: Poppins;
  margin: 10px;
`;

export const ButtonLiked = styled.button`
  background-color: ${(props) =>
    props.liked ? "red" : "rgba(81, 69, 229, 0.9)"};
  color: white;
  border: 1px solid #e4e4e7;
  padding: 5px 15px;
  cursor: pointer;
`;
export const PrimaryButton = styled.button`
  background-color: rgba(81, 69, 229, 0.9);
  color: white;
  border: 1px solid #e4e4e7;
  padding: 5px 15px;
  cursor: pointer;
`;
export const ButtonComments = styled.button`
  background-color: white;
  border: 1px solid #e4e4e7;
  padding: 5px 15px;
  cursor: pointer;
`;
export const CommentContainer = styled.div`
  display: flex;
`;
export const CommentInputDiv = styled.div`
  display: flex;
`;
