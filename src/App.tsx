import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { offWhite } from "./globals";
import ToDo from "./pages/ToDo";
import ODResetChart from "./pages/ODResetChart";
import SAP from "./pages/SAP";

function App() {
  return (
    <Box height="100vh" overflow="scroll" bg={offWhite}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/od-reset-curve" element={<ODResetChart />} />
          <Route path="/to-do" element={<ToDo />} />
          <Route path="/sap-video-training" element={<SAP />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
