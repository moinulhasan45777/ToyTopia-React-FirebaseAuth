import React from "react";
import banner from "../assets/banner.jpg";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className="hero min-h-[70vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-8 text-6xl md:text-8xl font-bold text-[#5eec0b]">
            ToyTopia
          </h1>
          <p className="mb-5 text-lg ">
            A world of fun and imagination where families explore, play, and
            discover unique toys while joy to every home.
          </p>
          <button
            onClick={() => {
              navigate("/all-toys");
            }}
            className="btn btn-primary text-lg px-8 py-6"
          >
            Explore
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
