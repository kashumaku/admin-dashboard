import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { themeContext } from "../context/ThemeContext";

const Customers = () => {
  const { theme } = useContext(themeContext);
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [focused, setFocused] = useState(false);
  const [pages, setPages] = useState(10);

  const fetchData = async (customerName) => {
    const res = await axios.get("https://fakestoreapi.com/users");
    if (customerName) {
      return setCustomers(
        customers.filter((c) =>
          `${c.name.firstname} " " ${c.name.lastname}`
            .toLowerCase()
            .includes(customerName.toLowerCase())
        )
      );
    }
    setCustomers(res.data);
  };
  useEffect(() => {
    fetchData(customerName);
  }, [customerName]);
  return (
    <div className="p-5 pb-32">
      {/* header */}
      <p className="flex justify-between pb-5">
        <h1 className="text-3xl font-semibold">Customer list</h1>
        <button className="bg-yellow-500 py-2 px-3 text-gray-800 font-semibold">
          New Product
        </button>
      </p>
      {/*  main*/}
      <div
        className={`border  ${
          theme === "dark" ? "border-gray-600" : "border-gray-200"
        } ${theme === "dark" ? "dark" : "light"}`}
      >
        {/* search and filter box */}
        <div
          className={`flex items-center p-4 justify-between border-b  ${
            theme === "dark" ? "border-gray-600" : "border-gray-200"
          }`}
        >
          <HiOutlineAdjustmentsHorizontal size={25} />
          <p
            className={`flex items-center gap-3 p-1 w-4/5 border-2 ${
              focused ? "border-blue-500 shadow-lg" : "border-gray-300"
            }  `}
          >
            <IoIosSearch size={24} color="gray" />
            <input
              onChange={(e) => setCustomerName(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search product"
              className="outline-none bg-transparent"
            />
          </p>
        </div>
        {/* Customer list */}
        <div>
          {/* Customer header */}
          <ul
            className={`flex  p-4 gap-5 font-semibold border-b  ${
              theme === "dark" ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <li className="w-1/5  ">Name</li>
            <li className="w-1/5">Phone</li>
            <li className="w-1/5">Email</li>
            <li className="w-1/5 hidden md:block">Address</li>
            <li className="w-1/5">Action</li>
          </ul>
          {/* products */}
          {customers.length === 0 ? (
            <h1>No search result</h1>
          ) : (
            customers.map((customer) => (
              <ul
                key={customer.id}
                className={`flex px-4 py-1 gap-5 border-b ${
                  theme === "dark" ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <li className="w-1/5 flex items-center gap-3 capitalize ">
                  {customer.name.firstname + " " + customer.name.lastname}
                </li>
                <li className="w-1/5  ">{customer.phone}</li>

                <li
                  className="w-1/5 text-wrap overflow-ellipsis overflow-hidden
                 hover:overflow-visible hover:bg-green-100 hover:w-fit "
                >
                  {customer.email}
                </li>
                <li className="w-1/5 hidden md:block ">
                  <p className=" ">
                    <span className=" font-semibold">City</span>:{" "}
                    {customer.address.city}
                  </p>
                  <p className=" ">
                    <span className=" font-semibold">Street</span>:{" "}
                    {customer.address.street}
                  </p>
                  <p className=" ">
                    <span className=" font-semibold">House no. </span>:{" "}
                    {customer.address.number}
                  </p>
                </li>

                <li className="w-1/5 ">
                  <BsThreeDots />
                </li>
              </ul>
            ))
          )}
        </div>
        {/* setting */}
        <div className="flex justify-between items-center p-5 bg-gray-300">
          {/* left */}
          <p className="flex gap-5">
            <button className="font-medium text-gray-500">Previous</button>
            <p className="flex gap-3">
              <span className="bg-yellow-500 px-2 text-white">1</span>
              <span className="bg-gray-500 px-2 text-white">2</span>
              <span className="bg-gray-500 px-2 text-white">3</span>
            </p>
            <button className="font-medium text-gray-800">Next</button>
          </p>
          <p className="gap-4 hidden md:flex text-black">
            <span className="mr-5">Showing 1 to 10 of 46</span>
            <span>Rows per page</span>
            <input
              type="number"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              className="w-10 p-1"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
