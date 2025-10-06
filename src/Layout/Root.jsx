import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Roots = () => {
  return (
    <div className="flex flex-col min-h-screen  ">
      <NavBar></NavBar>
      <div className=" max-w-screen-xl w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 mx-auto flex-1 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;