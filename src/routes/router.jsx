import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home.jsx";
import MyProfile from "../pages/MyProfile.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import axios from "axios";
import ToyDetails from "../pages/ToyDetails.jsx";
import PrivateRoute from "../provider/PrivateRoute.jsx";
import Loading from "../pages/Loading.jsx";
import Error from "../pages/Error.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import AllToys from "../pages/AllToys.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => axios("/ToyDetails.json").then((res) => res.data),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: () => axios("/ToyDetails.json").then((res) => res.data),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () => axios("/ToyDetails.json").then((res) => res.data),
      },
    ],

    // ✅ This works
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
