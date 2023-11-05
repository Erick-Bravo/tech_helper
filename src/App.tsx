import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Westinghouse from "./pages/Westinghouse";
import HTP from "./pages/HTP";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { offWhite } from "./globals";

function App() {
  return (
    <Box height="100vh" overflow="scroll" bg={offWhite}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/westinghouse" element={<Westinghouse />} />
          <Route path="/htp" element={<HTP />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
