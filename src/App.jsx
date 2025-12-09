import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";


export default function App() {
  return (
    <Box bg="gray.700" minH="100vh">
      <Navbar />
      <Box p={6}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/project" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Box>
    </Box>
  );
}
