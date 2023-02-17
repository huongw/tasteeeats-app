import Home from "./pages/Home";
import { Cuisine, Searched, Recipe } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
          </Routes>
        </Router>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: auto;
`;

export default App;
