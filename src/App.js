import Home from "./pages/Home";
import { Cuisine, Searched, Recipe, SearchBar } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Router>
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1500px;
  margin: auto;
`;

export default App;
