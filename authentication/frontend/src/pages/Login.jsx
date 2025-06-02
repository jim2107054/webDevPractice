import React, { useContext, useState } from "react";
import { dataContext } from "../context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { serverUrl } = useContext(dataContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const showToast = (message) => {
    if (message === "Login successful") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        serverUrl + "/api/login",
        {
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
          <h1 className="text-white text-3xl font-bold">Login</h1>
        </div>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col w-full h-fit p-4 gap-4"
        >
          {/*---------For inputs and button--------*/}
          <div className="flex flex-col gap-4">
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
              Login
            </button>
            <p className="text-white text-sm text-center">
              Create a new account?{" "}
              <span
                className="cursor-pointer underline text-[#6868ef]"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
