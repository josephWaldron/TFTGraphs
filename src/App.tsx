import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
