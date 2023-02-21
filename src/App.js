import Pages from "./pages/Pages";
import { Container } from "./components/sharedStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Category, NavBar } from "./pages";
import { FavoritesProvider } from "./FavoritesContext";

function App() {
  return (
    <Container>
      <FavoritesProvider>
        <Router>
          <NavBar />
          <Category />
          <Pages />
        </Router>
      </FavoritesProvider>
    </Container>
  );
}

export default App;
