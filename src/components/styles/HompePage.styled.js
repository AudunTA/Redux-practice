import styled from "styled-components";
export const FlexClass = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  transition: 0.3s;
`;

export const LeftDiv = styled.div`
  position: ${(props) => (props.position ? "fixed" : "")};
  top: ${(props) => (props.position ? "50px" : "")};
  background-color: var(--navy200);
  max-width: 250px;
  max-height: 300px;
  padding: 20px;
  background-color: var(--navy200);
  margin-top: 20px;
  border-radius: 12px;
  transition: 1.3s;
`;
