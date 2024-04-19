import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { themeContext } from "../context/ThemeContext";
import Action from "../components/Action";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { theme } = useContext(themeContext);
  const [products, setProducts] = useState([]);
  const [focused, setFocused] = useState(false);
  const [actionSelectedId, setActionSelectedId] = useState(-1);
  const [pages, setPages] = useState(10);
  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5 pb-32">
      {/* header */}
      <p className="flex justify-between pb-5">
        <h1 className="text-3xl font-semibold">ProductList list</h1>
        <Link
          to="/admin/dashboard/new-product"
          className="bg-yellow-500 py-2 px-3 text-gray-800 font-semibold"
        >
          New Product
        </Link>
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
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search product"
              className="outline-none bg-transparent"
            />
          </p>
        </div>
        {/* product list */}
        <div>
          {/* product header */}
          <ul
            className={`flex  p-4 gap-5 font-semibold border-b  ${
              theme === "dark" ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <li className="w-3/6  ">Product</li>
            <li className="w-1/6  ">Category</li>
            <li className="w-1/6">Stock</li>
            <li className="w-1/6">Price</li>
            <li className="w-1/6">Rating</li>
            <li className="w-1/6">Action</li>
          </ul>
          {/* products */}
          {products.map((product) => (
            <ul
              key={product.id}
              className={`flex px-4 py-2 gap-4 border-b ${
                theme === "dark" ? "border-gray-600" : "border-gray-200"
              } ${actionSelectedId === product.id ? "bg-blue-300" : ""}`}
            >
              <li className="w-3/6 flex items-center gap-3  ">
                <img
                  src={product.image}
                  alt=""
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <p className="flex flex-col">
                  <span>{product.title}</span>
                  <span>ID:{product.id}</span>
                </p>
              </li>
              <li className="w-1/6  ">{product.category}</li>
              <li className="w-1/6">24 in stock</li>
              <li className="w-1/6 ">{product.price}</li>
              <li className="w-1/6">
                <span>{product.rating.rate}</span>
              </li>
              {/* action */}
              <li className="w-1/6  hover:text-yellow-300 relative ">
                <BsThreeDots
                  size={25}
                  onClick={() => setActionSelectedId(product.id)}
                />
                <div
                  className={` ${
                    actionSelectedId === product.id
                      ? "block absolute top-0 z-10"
                      : "hidden"
                  }`}
                >
                  <Action
                    item={product}
                    dataType="products"
                    hideAction={setActionSelectedId}
                  />
                </div>
              </li>
            </ul>
          ))}
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
          <p className="flex gap-4">
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

export default ProductList;
