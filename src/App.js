import Pages from "./pages/Pages";
import { Container } from "./components/sharedStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { Nav, Logo } from "./components/sharedStyles";
import { SearchBar, Category } from "./pages";

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
        <Pages />
      </Router>
    </Container>
  );
}

export default App;
