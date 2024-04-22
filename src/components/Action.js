import React, { useState } from "react";
import DeleteProduct from "./actions/DeleteProduct";

const Action = ({ item, dataType, hideAction }) => {
  const [deleteRequest, setDeleteRequest] = useState(false);

  return (
    <ul
      className=" bg-gray-100 text-gray-800
     font-semibold shadow-md py-3 flex flex-col gap-2
      border border-gray-300 rounded-b-xl rounded-tr-xl"
    >
      {dataType !== "customers" && (
        <li className="text-green-500 px-4 cursor-pointer">Edit</li>
      )}
      <li className="px-4 cursor-pointer">Detail</li>
      {dataType === "products" && (
        <li className="px-4 cursor-pointer ">Add tag</li>
      )}
      {dataType === "products" && (
        <li className="px-4 cursor-pointer ">Remove tag</li>
      )}

      <li
        onClick={() => setDeleteRequest(true)}
        className="px-4 pt-1 border-t border-red-400 text-red-600 cursor-pointer  "
      >
        Delete
      </li>
      {/*  */}
      {deleteRequest && (
        <DeleteProduct
          item={item}
          hideAction={hideAction}
          setDeleteRequest={setDeleteRequest}
        />
      )}
    </ul>
  );
};

export default Action;
