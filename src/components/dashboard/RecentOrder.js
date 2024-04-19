import nikeAir from "../../images/products/Nike air.jpg";
import closet from "../../images/products/closet.jpg";
import fredsma from "../../images/products/Fredsma Skirt.jpg";
import iphone from "../../images/products/iphone 15.jpg";
import { BsThreeDots } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Iphone 15",
    price: 80000,
    image: iphone,
    date: "2020-01-01",
    status: "Pending",
  },
  {
    id: 2,
    name: "Nike air max",
    price: 6000,
    image: nikeAir,
    date: "2020-01-01",
    status: "Pending",
  },
  {
    id: 3,
    name: "Fredsma skirt",
    price: 1200,
    image: fredsma,

    date: "2020-01-01",
    status: "Pending",
  },
  {
    id: 4,
    name: "Female closet",
    price: 13000,
    image: closet,

    date: "2020-01-01",
    status: "Pending",
  },
];
const RecentOrder = ({ theme }) => {
  return (
    <div
      className={`flex-1 p-5 rounded-lg ${theme === "dark" ? "dark" : "light"}`}
    >
      {/* header */}
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Recent order</h1>
        <BsThreeDots />
      </div>
      {/* list */}
      <div>
        {data.map((d) => (
          <div key={d.id} className="flex justify-between my-5">
            <p className="flex gap-4">
              <img src={d.image} alt="" className="w-14 h-10 object-cover" />
              <p>
                <h2 className="text-sm">{d.name}</h2>
                <span className="text-xs text-gray-500">{d.date}</span>
              </p>
            </p>
            <span>{d.price} ETB</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrder;
