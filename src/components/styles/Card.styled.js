import styled from "styled-components";

export const Carddiv = styled.div`
  display: flex;
  font-family: Poppins;
  background-color: var(--navy200);
  border-radius: 12px;
  transition: 0.3s;
  margin-top: 10px;
  :hover {
    background-color: var(--navyHover);
  }
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
  margin-top: 10px;
  display: flex;
  justify-content: end;
`;
export const CommentInputDiv = styled.div`
  display: flex;
`;
export const BtnComments = styled.div`
  color: #bad9fc;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: #1b3152;
  width: 40px;
  border-radius: 9px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;

  p {
    margin-left: 5px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  :hover {
    background-color: var(--navyHover);
  }
`;
export const BtnLikes = styled.div`
  color: ${(props) => (props.liked ? "#B24E46" : "#bad9fc")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: #1b3152;
  width: 40px;
  border-radius: 9px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;

  p {
    margin-left: 5px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  :hover {
    background-color: var(--navyHover);
  }
`;
