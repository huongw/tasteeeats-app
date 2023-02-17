import Home from "./pages/Home";
import { Cuisine, Searched, Recipe, SearchBar, Category } from "./pages";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { Container, Nav, Logo } from "./components/styles";

function App() {
  return (
    <Container>
      <Router>
        <Nav>
          <Logo to={"/"}>
            <GiKnifeFork />
            TasteeEats
          </Logo>
          <SearchBar />
        </Nav>
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
