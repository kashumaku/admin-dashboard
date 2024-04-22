import { useContext, useState } from "react";
import { FaDollarSign, FaShoppingBag } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import Card from "../components/dashboard/Card";
import { themeContext } from "../context/ThemeContext";
import SellingAnalysis from "../components/dashboard/SellingAnalysis";
import TopRevenue from "../components/dashboard/TopRevenue";
import RecentOrder from "../components/dashboard/RecentOrder";
import TopSellingProducts from "../components/dashboard/TopSellingProducts";

const data = [
  {
    id: 1,
    icon: <FcSalesPerformance size={30} color="green" />,
    title: "Total Sales",
    amount: 32000,
    percentage: 45,
  },
  {
    id: 2,
    icon: <FaDollarSign size={30} color="orange" />,
    title: "Total Revenue",
    amount: 12000,
    percentage: 82,
  },
  {
    id: 3,
    icon: <FaShoppingBag size={30} />,
    title: "Total Orders",
    amount: 23000,
  },
];
const Dashboard = () => {
  const { theme } = useContext(themeContext);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <div className="p-5 pb-24 overflow-hidden">
      {/* top */}
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold">Dashboard</h1>
        <p className="flex gap-5">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-500 bg-white/50 px-2 py-1"
          />
          <button className="bg-yellow-500 px-3 py-1 text-black cursor-pointer">
            Export
          </button>
        </p>
      </div>
      {/* main */}
      <div className="md:grid md:grid-cols-3 mt-5 gap-5">
        {/* left */}
        <div className="col-span-2 flex flex-col gap-5">
          {/* top cards */}
          <div className=" flex justify-between gap-2 ">
            <Card bg="#aaa" data={data[0]} />
            <Card bg="#bbd" data={data[1]} />
            <Card bg="#ccc" data={data[2]} />
          </div>
          {/* selling analysis */}
          <SellingAnalysis theme={theme} />

          <TopSellingProducts theme={theme} />
        </div>
        {/* right */}
        <div className="flex flex-col gap-5 max-md:mt-5">
          <TopRevenue theme={theme} />
          <RecentOrder theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
