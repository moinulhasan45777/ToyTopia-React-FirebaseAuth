import React, { use, useState } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useTitle from "../hooks/useTitle";
import Loading from "./Loading";

const Register = () => {
  useTitle("Register");
  const {
    register,
    setUser,
    user,
    updateUser,
    loginWithGoogle,
    setLoading,
    loading,
  } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [passError, setPassError] = useState(null);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!pattern.test(password)) {
      setPassError(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }
    // Registration
    register(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        updateUser({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("Registration Successful!");
            setUser({ ...newUser, displayName: name, photoURL: photoURL });
          })
          .catch((error) => {
            setUser(userCredential.user);
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  // Handing google Login
  const handleGoogleLogin = () => {
    setLoading(true);
    loginWithGoogle()
      .then(() => {
        toast.success("Logged in Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
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
          onSubmit={handleRegistration}
          className="card bg-white w-full max-w-sm shrink-0 shadow-2xl"
        >
          <h2 className="text-3xl text-center font-bold text-black pt-7">
            Register
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">PhotoURL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="PhotoURL"
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  onChange={() => setPassError(null)}
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  className="input"
                  placeholder="Password"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    size={20}
                    className="absolute top-2.5 right-7 cursor-pointer"
                  ></FaEyeSlash>
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    size={20}
                    className="absolute top-2.5 right-7 cursor-pointer"
                  ></FaEye>
                )}
              </div>
              <p className="text-red-500">{passError}</p>
              <button type="submit" className="btn btn-primary mt-4">
                Regsiter
              </button>
              <div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="link link-hover text-primary font-semibold"
                  >
                    Login
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

export default Register;
