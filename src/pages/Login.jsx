import React, { use, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Links, Navigate, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../hooks/useTitle";
import Loading from "./Loading";

const Login = () => {
  useTitle("Login");
  const { login, setUser, user, loginWithGoogle, loading, setLoading } =
    use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        toast.success("Login Successful!");
        setUser(userCredential.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  // Handing google Login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Logged in Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const emailRef = useRef("");
  const handleClick = () => {
    const email = { email: emailRef.current.value };

    navigate("/forgot-password", { state: email });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && !location.state) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <div className="min-h-[calc(100vh-72px)] flex justify-center items-center p-5 bg-secondary-content">
        <form
          onSubmit={handleLogin}
          className="card bg-white w-full max-w-sm shrink-0 shadow-2xl"
        >
          <h2 className="text-3xl text-center font-bold text-black pt-7">
            Login
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                ref={emailRef}
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <button
                  type="button"
                  onClick={handleClick}
                  className="link link-hover font-medium"
                >
                  Forgot password?
                </button>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>

              <div>
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="link link-hover text-primary font-semibold"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <button
                onClick={handleGoogleLogin}
                className="btn mt-4 border-primary bg-transparent flex   hover:border-red-500 hover:scale-105 transition-all duration-200 ease-in-out"
              >
                <FcGoogle size={24}></FcGoogle>
                <p>Login with Google</p>
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
