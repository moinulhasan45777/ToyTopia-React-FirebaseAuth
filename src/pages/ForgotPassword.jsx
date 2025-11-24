import React, { use, useState } from "react";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "./Loading";

const ForgotPassword = () => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  const { email } = location.state ? location.state : {};
  const [mainEmail, setMainEmail] = useState(email);
  useTitle("Forgot Password");

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div className="min-h-[calc(100vh-72px)] flex justify-center items-center p-5 bg-secondary-content">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "https://mail.google.com/";
        }}
        className="card bg-white w-full max-w-sm shrink-0 shadow-2xl"
      >
        <h2 className="text-3xl text-center font-bold text-black pt-7">
          Forgot Password
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              onChange={(e) => {
                setMainEmail(e.target.value);
              }}
              value={mainEmail}
              required
            />

            <button type="submit" className="btn btn-primary mt-4">
              Reset Password
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
