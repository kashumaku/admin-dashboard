import React, { useContext, useState } from "react";

import { sidebarMenu } from "../constants/sidebarMenu";
import { MdOutlineArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";
const MobileSidebar = ({ showSidebar, setShowSidebar }) => {
  const { theme } = useContext(themeContext);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [visibleSubmenu, setVisibleSubmenu] = useState("");
  const handleSelect = (e, title) => {
    e.stopPropagation();
    setSelectedMenu(title);
  };
  const handleVisible = (e, title) => {
    e.stopPropagation();
    setVisibleSubmenu(title);
  };

  return (
    <div
      className={`${theme === "dark" ? "dark-sidebar" : "light-sidebar"} ${
        showSidebar ? "w-56 duration-[.5s]" : "w-0 duration-[.5s]"
      } h-screen pb-5  flex flex-col gap-4
      overflow-y-scroll fixed md:hidden z-20`}
    >
      {/* close icon */}
      <IoCloseSharp
        onClick={() => setShowSidebar(false)}
        size={35}
        fill="red"
        className="absolute top-3 right-3 bg-white rounded-full"
      />
      {/* logo */}
      <div
        className=" shadow-lg flex
       flex-col justify-center items-center  p-5"
      >
        <img src={logo} alt="" className="w-[100px] h-[100px] rounded-full" />
        <h1 className="text-3xl font-bold min-w-44 ">E-Gebeya</h1>
      </div>
      {/* main menu item */}
      {sidebarMenu.map((menu) => (
        <div
          key={menu.title}
          onClick={(e) => {
            handleSelect(e, menu.title);
            handleVisible(e, menu.title);
            !menu?.subMenu && setShowSidebar(false);
          }}
          className="pl-5 pb-2 border-b border-gray-700"
        >
          <Link
            to={!menu?.subMenu ? menu.path : "#"}
            className={`flex gap-2 items-center rounded-l-md  ${
              selectedMenu === menu.title &&
              !menu?.subMenu &&
              "bg-[#f7557c] p-3"
            }`}
          >
            <span>
              {menu.icon(
                25,
                selectedMenu === menu.title || visibleSubmenu === menu.title
                  ? "white"
                  : "#f7557c"
              )}
            </span>
            <span className="text-l font-semibold w-full">{menu.title}</span>
            {/* visiblity control icons */}
            <div className="cursor-pointer">
              {visibleSubmenu === menu.title
                ? menu.subMenu && (
                    <MdOutlineArrowDropDown
                      size={24}
                      onClick={(e) => handleVisible(e, "")}
                    />
                  )
                : menu?.subMenu?.length > 0 && (
                    <MdOutlineArrowRight size={28} />
                  )}
            </div>
          </Link>
          {/* sub menu item */}
          <div
            className={`ml-10  ${
              visibleSubmenu === menu.title ? "block" : "hidden"
            }`}
          >
            {menu?.subMenu?.map((subMenu) => (
              <div key={subMenu.title}>
                <Link
                  to={subMenu.path}
                  onClick={(e) => {
                    handleSelect(e, subMenu.title);
                    setShowSidebar(false);
                  }}
                  className={`text-base my-2 font-semibold block ${
                    selectedMenu === subMenu.title &&
                    "rounded-l-md bg-[#f7557c] w-[100%] p-3"
                  }`}
                >
                  {subMenu?.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileSidebar;
