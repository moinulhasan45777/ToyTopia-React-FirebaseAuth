import React, { use } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Signed Out!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div
      className={`navbar items-start md:items-center text-white lg:px-10 px-3 ${
        useLocation().pathname == "/"
          ? "absolute bg-transparent"
          : "static bg-secondary-content"
      }`}
    >
      <div className="navbar-start ">
        <div className="dropdown text-black">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                useLocation().pathname == "/" ? "text-white" : "text-black"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-secondary"
          >
            <li>
              <NavLink to="/" className="text-base">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/profile" className="text-base">
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-toys" className="text-base">
                All Toys
              </NavLink>
            </li>
          </ul>
        </div>
        <a
          className={`text-3xl md:text-4xl  ${
            useLocation().pathname == "/" ? "text-[#5eec0b]" : "text-primary"
          } font-bold`}
        >
          ToyTopia
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 text-lg font-semibold ${
            useLocation().pathname == "/" ? "text-white" : "text-black"
          }`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/all-toys">All Toys</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center flex-col-reverse md:flex-row gap-4">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="w-14 h-14 rounded-full border-3 border-primary overflow-hidden cursor-pointer">
                <img
                  src={user.photoURL}
                  alt="User Photo"
                  className="w-full h-full object-cover rounded-full  "
                />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-primary text-lg px-6 md:px-8 py-3 md:py-6"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary text-lg px-6 md:px-8 py-3 md:py-6"
          >
            {" "}
            Login{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
