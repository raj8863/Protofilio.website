// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Routes>
      {/* MainLayout wraps all child pages */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        {/* optional 404: <Route path="*" element={<NotFound/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
