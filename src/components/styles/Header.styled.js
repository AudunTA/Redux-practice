import styled from "styled-components";
export const HeaderDiv = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
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
  }
`;
export const SearchIconHeader = styled.div`
  background-color: #182a46;
  color: white;
`;
