import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Roots = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto ">
      <NavBar></NavBar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;