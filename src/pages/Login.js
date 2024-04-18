import { AiOutlineMail } from "react-icons/ai";
import { MdLockPerson } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import bgimage from "../images/bg image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("k@gmail.com");
  const [password, setPassword] = useState("Kassahun1234");
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "k@gmail.com" && password === "Kassahun1234") {
      navigate("/admin/dashboard");
    } else if (email !== "k@gmail.com")
      toast.error("User Not found. Please try again");
    else if (password !== "Kassahun1234")
      toast.error("Wrong password. Please try again");
    else {
      toast.error("Something went wrong. Please try again");
    }
  };
  return (
    <div className="flex h-screen bg-orange-100 text-gray-700  ">
      <ToastContainer />
      {/* left */}
      <div className="flex-1 flex flex-col items-center gap-5 pt-20">
        <h1 className="text-3xl font-bold ">E-Gebeya</h1>
        <h2 className="text-2xl font-semibold">Sign in to your account</h2>
        {/* email */}
        <p className="flex gap-4 py-4 px-2 bg-white w-[80%]  rounded-lg overflow-hidden">
          <AiOutlineMail size={30} color="gray" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email Address"
            className="flex-1 text-lg"
          />
        </p>
        {/* password */}
        <p className="flex gap-4 py-4 px-2 bg-white w-[80%] rounded-lg overflow-hidden">
          <MdLockPerson size={30} color="gray" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={inputType}
            placeholder="Password"
            className="flex-1 text-lg"
          />
          {/* password visiblity controls */}
          {inputType == "password" ? (
            <FaEyeSlash
              size={24}
              color="gray"
              onClick={() => setInputType("text")}
              className="cursor-pointer"
            />
          ) : (
            <FaEye
              size={24}
              color="gray"
              onClick={() => setInputType("password")}
              className="cursor-pointer"
            />
          )}
        </p>
        {/* forgot password */}
        <div className="flex justify-between w-[80%]">
          <p>
            <input type="checkbox" /> <span>Remember</span>
          </p>
          <Link to="">forgot your password?</Link>
        </div>
        <button
          onClick={handleLogin}
          className="bg-yellow-500 w-[80%] p-3 text-white text-2xl  "
        >
          Login
        </button>
        <Link to="#" className="text-gray-600 text-xl">
          Don't have an account?
        </Link>
      </div>
      {/* right */}
      <div className="container flex-1">
        {/* Overlay */}
        <div className="overlay">
          {/* animating lines */}
          <h1 className="title">Welcome To E-Gebeya Admin Dashboard</h1>
          <div className="item item1">
            <h2 className="line" />
            <h1 className="circle" />
          </div>
          <div className="item item2">
            <h2 className="line" />
            <h1 className="circle" />
          </div>
          <div className="item item3">
            <h2 className="line" />
            <h1 className="circle" />
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum
            nisi, fuga labore debitis asperiores soluta fugit pariatur, dolores
            distinctio officiis accusamus atque fugiat at. Asperiores quos
            explicabo maiores veniam.
          </p>
        </div>
        <img src={bgimage} alt="" className="h-[100%] object-cover " />
      </div>
    </div>
  );
};

export default Login;
