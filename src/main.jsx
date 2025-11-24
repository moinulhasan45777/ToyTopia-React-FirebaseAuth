import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import AuthProvider from "./provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-right" />
    </AuthProvider>
  </StrictMode>
);
