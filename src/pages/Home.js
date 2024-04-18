import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/topbar";
import { Outlet } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { theme } = useContext(themeContext);
  return (
    <div className="flex h-[100%] ">
      <Sidebar showSidebar={showSidebar} />
      <div className="w-full h-[100%]">
        <Topbar setShowSidebar={setShowSidebar} />
        {/* Outlet */}
        <div
          className={`h-[100%] overflow-y-scroll  ${
            theme === "dark" ? "dark-body" : "light-body"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
