import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Westinghouse from "./pages/Westinghouse";
import HTP from "./pages/HTP";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Box h="100vh" overflow="scroll">
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
