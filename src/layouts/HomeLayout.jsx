import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="bg-white relative">
      <Navbar></Navbar>
      <main>
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
