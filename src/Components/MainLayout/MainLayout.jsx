// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
  return (
    <div >
      <Navbar />

      {/* main-content should respect navbar height (see CSS below) */}
      <main className="page-wrapper">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
