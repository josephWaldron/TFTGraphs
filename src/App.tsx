import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
