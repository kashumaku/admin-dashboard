import { AiOutlineMail } from "react-icons/ai";
import { MdLockPerson } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { TbLockCheck } from "react-icons/tb";

import bgimage from "../images/bg image.jpg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useContext, useState } from "react";
import { themeContext } from "../context/ThemeContext";

const Register = () => {
  const { theme } = useContext(themeContext);
  const [credentials, setCredentials] = useState({});

  const [inputType, setInputType] = useState("password");

  const handleCreate = () => {
    console.log(credentials);
    if (
      !credentials.fullName ||
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    )
      toast.error("Please Enter All Credentials");
    else if (credentials.email === "k@gmail.com")
      toast("User exists use an other email");
    else if (credentials?.password?.length < 6)
      toast("Password must be at least 6 characters long");
    else if (credentials.password !== credentials.confirmPassword)
      toast("Passwords do not match");
    else toast.success("Successfully registered");
  };
  return (
    <div
      className={`flex h-[100%] overflow-hidden ${
        theme === "dark" ? "dark" : "light"
      }  bg-orange-100 text-gray-700 `}
    >
      <ToastContainer />
      {/* left */}
      <div className="flex-1 flex flex-col items-center gap-5 ">
        <h1 className="text-3xl font-bold ">E-Gebeya</h1>
        <h2 className="text-2xl font-semibold">Sign in to your account</h2>
        {/* Full name */}
        <p className="flex gap-4 py-3 px-2 bg-white w-[80%]  rounded-lg overflow-hidden ">
          <LuUser2 size={30} color="gray" />
          <input
            value={credentials.fullName}
            onChange={(e) =>
              setCredentials((pre) => ({
                ...pre,
                [e.target.name]: e.target.value,
              }))
            }
            type="text"
            name="fullName"
            placeholder="Full name"
            className="flex-1 text-lg outline-none "
          />
        </p>
        {/* email */}
        <p className="flex gap-4 py-3 px-2 bg-white w-[80%]  rounded-lg overflow-hidden">
          <AiOutlineMail size={30} color="gray" />
          <input
            value={credentials.email}
            onChange={(e) =>
              setCredentials((pre) => ({
                ...pre,
                [e.target.name]: e.target.value,
              }))
            }
            name="email"
            type="text"
            placeholder="Email Address"
            className="flex-1 text-lg outline-none"
          />
        </p>
        {/* password */}
        <p className="flex gap-4 py-3 px-2 bg-white w-[80%] rounded-lg overflow-hidden">
          <MdLockPerson size={30} color="gray" />
          <input
            onChange={(e) =>
              setCredentials((pre) => ({
                ...pre,
                [e.target.name]: e.target.value,
              }))
            }
            name="password"
            value={credentials.password}
            type={inputType}
            placeholder="Password"
            className="flex-1 text-lg outline-none"
          />
          {/* password visiblity controls */}
          {inputType === "password" ? (
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
        {/*confirm password */}
        <p className="flex gap-4 py-3 px-2 bg-white w-[80%] rounded-lg overflow-hidden">
          <TbLockCheck size={30} color="gray" />
          <input
            onChange={(e) =>
              setCredentials((pre) => ({
                ...pre,
                [e.target.name]: e.target.value,
              }))
            }
            value={credentials.confirmPassword}
            name="confirmPassword"
            type={inputType}
            placeholder="Confirm Password"
            className="flex-1 text-lg outline-none"
          />
          {/* password visiblity controls */}
          {inputType === "password" ? (
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
          onClick={handleCreate}
          className="bg-green-500 w-[80%] p-3 text-white text-2xl  "
        >
          Create
        </button>
        {/* <Link to="#" className="text-gray-600 text-xl">
         have an account? 
        </Link> */}
      </div>
      {/* right */}
      <div className="container hidden md:block flex-1">
        {/* Overlay */}
        <div className="overlay">
          {/* animating lines */}
          <h1 className="title">Welcome To E-Gebeya Admin Dashboard</h1>
          <div className="item item1">
            <div className="line" />
            <div className="circle" />
          </div>
          <div className="item item2">
            <div className="line" />
            <div className="circle" />
          </div>
          <div className="item item3">
            <div className="line" />
            <div className="circle" />
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

export default Register;
