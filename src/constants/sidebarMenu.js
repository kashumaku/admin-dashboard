import { TfiDashboard } from "react-icons/tfi";
import { FaDatabase, FaRegUser, FaCalendarAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { SiCoinmarketcap, SiSimpleanalytics } from "react-icons/si";
import { MdEmail, MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: (size, color) => <TfiDashboard size={size} color={color} />,
    path: "/admin/dashboard",
  },
  {
    title: "Catalog",
    icon: (size, color) => <FaDatabase size={size} color={color} />,
    path: "/home",
    subMenu: [
      {
        title: "Prodact List",
        icon: "home",
        path: "/admin/dashboard/products",
      },
      {
        title: "catalog List",
        icon: "home",
        path: "/admin/dashboard",
      },
    ],
  },
  {
    title: "Customers",
    icon: (size, color) => <FaRegUser size={size} color={color} />,
    path: "/admin/dashboard/customers",
  },
  {
    title: "Orders",
    icon: (size, color) => <IoMdCart size={size} color={color} />,
    path: "/home",
    subMenu: [
      {
        title: "Order List",
        icon: "home",
        path: "/home",
      },
      {
        title: "Order Details",
        icon: "home",
        path: "/home",
      },
    ],
  },
  {
    title: "Marketing",
    icon: (size, color) => <SiCoinmarketcap size={size} color={color} />,
    path: "/home",
    subMenu: [
      {
        title: "Coupon List",
        icon: "home",
        path: "/home",
      },
      {
        title: "Coupon",
        icon: "home",
        path: "/home",
      },
    ],
  },
  {
    title: "Inbox",
    icon: (size, color) => <MdEmail size={size} color={color} />,
    path: "/home",
    subMenu: [
      {
        title: "Inbox List",
        icon: "home",
        path: "/home",
      },
      {
        title: "Conversations",
        icon: "home",
        path: "/home",
      },
    ],
  },
  {
    title: "Calendar",
    icon: (size, color) => <FaCalendarAlt size={size} color={color} />,
    path: "/home",
  },
  {
    title: "Analytics",
    icon: (size, color) => <SiSimpleanalytics size={size} color={color} />,
    path: "/home",
  },
  {
    title: "Settings",
    icon: (size, color) => <IoSettingsOutline size={size} color={color} />,
    path: "/admin/dashboard/settings",
  },
  {
    title: "Log out",
    icon: (size, color) => <MdOutlineLogout size={size} color={color} />,
    path: "/admin/login",
  },
];
