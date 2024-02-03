import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Westinghouse from "./pages/Westinghouse";
import HTP from "./components/Links_Home/ModelSearch/ModelSearch";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { offWhite } from "./globals";
import ToDo from "./components/Links_Home/ToDo";

function App() {
  return (
    <Box height="100vh" overflow="scroll" bg={offWhite}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/westinghouse" element={<Westinghouse />} />
          <Route path="/htp" element={<HTP />} />
          <Route path="/to-do" element={<ToDo />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
