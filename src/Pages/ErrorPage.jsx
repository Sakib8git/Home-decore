import React from "react";
import { useRouteError } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <div>
        {error.message}{" "}
        <h1 className="text-8xl flex justify-center items-center mt-28">
          404 not found😣
        </h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
<h1 className="text-8xl">404 not found😣</h1>;
