import React from "react";
import { Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {
  
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
