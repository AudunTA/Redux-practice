import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: ${(props) => (props.position ? "fixed" : "")};
  width: 100%;
  z-index: 22;
  background-color: rgb(24 39 63);
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  transition: 0.3s;
`;
export const LogginInputs = styled.input`
  border: 1px solid black;
`;
export const ButtonPrimary = styled.button`
  background-color: blue;
  border: 1px solid black;
  color: white;
`;
export const NavDiv = styled.div`
  ul {
    display: flex;
    list-style: none;
    color: rgba(186, 217, 252, 0.3);
    font-family: "Poppins";
    font-weight: 500;
    text-transform: uppercase;
    justify-content: space-evenly;
  }
  li {
    margin: 0 5px;
    cursor: pointer;
  }
`;
export const SearchIconHeader = styled.div`
  background-color: #182a46;
  color: white;
`;
