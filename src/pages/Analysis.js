import React from "react";
import Customers from "./Customers";
import Barchart from "../charts/Bar";

const Analysis = () => {
  return (
    <div className="p-5 pb-24 overflow-hidden">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Analysis</h1>
        <button className="bg-yellow-500 px-5 py-1">Export</button>
      </div>
      {/* cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-3">
        <div className="bg-blue-200 p-3 rounded-md">
          <h2 className="text-2xl font-medium">Number of Customers</h2>
          <span>2000</span>
        </div>
        <div className="bg-orange-200 p-3 rounded-md">
          <h2 className="text-2xl font-medium">Number of Sold products</h2>
          <span>2000</span>
        </div>
        <div className="bg-green-200 p-3 rounded-md">
          <h2 className="text-2xl font-medium">Number of Ordered products</h2>
          <span>2000</span>
        </div>
        <div className="bg-gray-200 p-3 rounded-md">
          <h2 className="text-2xl font-medium">Number of Delivered products</h2>
          <span>2000</span>
        </div>
      </div>
      {/* charts */}
      <div className="mt-5 overflow-scroll">
        <Barchart />
      </div>
    </div>
  );
};

export default Analysis;
