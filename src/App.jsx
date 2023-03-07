import "./App.css";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 8px;
`;
function App() {
  return (
    <div className="App">
      <Card>
        <p>Hello</p>
      </Card>
    </div>
  );
}

export default App;
