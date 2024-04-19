import nikeAir from "../../images/products/Nike air.jpg";
import closet from "../../images/products/closet.jpg";
import fredsma from "../../images/products/Fredsma Skirt.jpg";
import iphone from "../../images/products/iphone 15.jpg";

const data = [
  {
    id: 1,
    name: "Iphone 15",
    price: 80000,
    orders: 43,
    stock: 25,
    image: iphone,
    date: "2020-01-01",
    status: "Pending",
  },
  {
    id: 2,
    name: "Nike air max",
    price: 6000,
    orders: 73,
    stock: 37,
    image: nikeAir,
    date: "2020-01-01",
    status: "Pending",
  },
  {
    id: 3,
    name: "Fredsma skirt",
    price: 1200,
    orders: 48,
    stock: 53,
    image: fredsma,

    date: "2020-01-01",
    status: "Pending",
  },
  {
    id: 4,
    name: "Female closet",
    price: 13000,
    orders: 87,
    stock: 15,
    image: closet,

    date: "2020-01-01",
    status: "Pending",
  },
];

const TopSellingProducts = ({ theme }) => {
  return (
    <div
      className={`flex-1 px-2  py-5 rounded-lg ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-3">Top selling products</h1>
      {/* header */}
      <ul className="flex  text-xl  border-b border-gray-400  font-semibold gap-3">
        <li className="flex-1 ">Product</li>
        <li className="flex-1 ">Price</li>
        <li className="flex-1 ">Stock</li>
        <li className="flex-1 ">Orders</li>
        <li className="flex-1 ">Status</li>
      </ul>
      {data.map((d) => (
        <div key={d.id} className="flex my-5 gap-3">
          <p className="flex gap-4 flex-1 ">
            <img
              src={d.image}
              alt=""
              className="hidden lg:block w-14 h-10 object-cover "
            />
            <h2 className="text-sm">{d.name}</h2>
          </p>
          <p className="flex-1 ">{d.price} ETB</p>
          <p className="flex-1 ">{d.stock}</p>
          <p className="flex-1 ">{d.orders}</p>
          <p className="flex-1 ">{d.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TopSellingProducts;
