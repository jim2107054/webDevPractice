import React, { useContext, useState } from "react";
import profileImage from "../assets/profile.png";
import { dataContext } from "../context/UserContext";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { serverUrl } = useContext(dataContext);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const showToast = (message) => {
    if (message === "User created successfully") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        serverUrl + "/api/signup",
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);
      showToast(response.data.message);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[400px] h-fit bg-[#152823] rounded">
        <div className="w-full h-[100px] flex justify-center items-center">
          <h1 className="text-white text-3xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-full h-fit p-4 gap-4"
        >
          {/*---------For image--------*/}
          <div className="flex justify-center items-center w-full h-[100px]">
            <div className="w-[100px] h-[100px] rounded-full bg-white overflow-hidden relative border-2 border-white cursor-pointer">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="w-[100%] h-[100%] top-0 bg-black absolute opacity-0 hover:opacity-50 flex justify-center items-center text-white text-2xl">
                +
              </div>
            </div>
          </div>
          {/*---------For inputs and button--------*/}
          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
              placeholder="First Name"
              className="p-2 rounded bg-[#1e3a5f] text-white outline-none"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Last Name"
              className="p-2 rounded bg-[#1e3a5f] text-white outline-none"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="p-2 rounded bg-[#1e3a5f] text-white outline-none"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="p-2 rounded bg-[#1e3a5f] text-white outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-green-500 hover:scale-105 text-white p-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-white text-sm text-center">
              Already have an account?{" "}
              <span
                className="cursor-pointer underline text-[#6868ef]"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
