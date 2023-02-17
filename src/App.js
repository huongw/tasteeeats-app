import Home from "./pages/Home";
import { Cuisine, Searched, Recipe } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>}/>
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
