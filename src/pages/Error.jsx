import React from "react";
import error from "../assets/Error.jpg";
import useTitle from "../hooks/useTitle";

const Error = () => {
  useTitle("Error 404");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-secondary-content">
      <img
        src={error}
        alt="404 Error"
        className="rounded-lg w-72 h-72 -mt-10"
      />
      <h1 className="text-4xl font-bold text-center">
        Error 404 <br></br>Page Not Found
      </h1>
    </div>
  );
};

export default Error;
