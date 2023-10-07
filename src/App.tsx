import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Westinghouse from "./pages/Westinghouse";
import HTP from "./pages/HTP";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const Home = () => {
  return <Box>This is Home</Box>;
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/westinghouse" element={<Westinghouse />} />
        <Route path="/htp" element={<HTP />} />
      </Routes>
    </Router>
  );
}

export default App;
