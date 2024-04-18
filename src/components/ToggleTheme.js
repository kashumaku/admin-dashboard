import { MdLightMode } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { WiMoonAltNew } from "react-icons/wi";
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <button
      onClick={toggleTheme}
      className="flex bg-gray-400 gap-3 px-4 py-1 rounded-full"
    >
      {theme === "dark" ? (
        <MdLightMode size={24} color="white" />
      ) : (
        <IoMoonSharp size={24} color="black" />
      )}
      <WiMoonAltNew size={24} color={theme === "dark" ? "gray" : "white"} />
    </button>
  );
};

export default ToggleTheme;
