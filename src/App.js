import Home from "./pages/Home";
import { Cuisine, Searched, Recipe, SearchBar, Category } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Router>
        <SearchBar/>
        <Category/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
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
