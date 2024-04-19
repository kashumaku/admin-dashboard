import { IoMdMenu, IoIosSearch, IoIosNotifications } from "react-icons/io";
import ethiopia from "../images/ethio-flag.png";
import profile from "../images/profile.jpg";
import ToggleTheme from "./ToggleTheme";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
const Topbar = ({ setShowSidebar }) => {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`flex ${
        theme === "dark" ? "dark-topbar" : "light-topbar"
      } p-3 justify-between w-full`}
    >
      {/* left */}
      <div className="flex gap-3 items-center ">
        <IoMdMenu size={28} onClick={() => setShowSidebar((pre) => !pre)} />
        <div className="flex items-center gap-2 bg-gray-300 p-1 rounded-lg overflow-hidden">
          <IoIosSearch size={24} color="gray" />
          <input
            placeholder="Search..."
            className="bg-gray-300 outline-none text-lg max-md:w-[80px]"
          />
        </div>
        {/* Theme toggler */}
        <ToggleTheme />
      </div>
      {/* right */}
      <div className="flex items-center gap-3 ml-2">
        <img src={ethiopia} alt="" className="hidden md:block w-8 h-5" />
        {/* notification */}
        <div className="relative ">
          <IoIosNotifications size={30} />
          <span
            className="absolute top-0 right-0 w-4 h-4 bg-red-500
           text-white rounded-full flex items-center justify-center text-xs"
          >
            9
          </span>
        </div>
        {/* user */}
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="hidden md:block">
            <p className="text-gray-500">Kassahun Melaku</p>
            <p className="text-gray-400">kassahun@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
