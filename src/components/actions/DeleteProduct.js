import React from "react";

const DeleteProduct = ({ item, setDeleteRequest, hideAction }) => {
  const handleDelete = () => {
    hideAction(true);
    setDeleteRequest(false);
  };
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center px-5 bg-black/80 w-screen h-screen">
      <div className="bg-gray-500 text-white p-5 rounded-lg">
        <h1>Do You want to delete </h1>
        <p>{item.title} </p>
        <div className="mt-10 flex justify-end gap-10">
          <button
            onClick={handleDelete}
            className="bg-red-400 text-white px-3 py-1"
          >
            Delete
          </button>
          <button
            onClick={() => {
              hideAction(true);
              setDeleteRequest(false);
            }}
            className="bg-orange-700 text-white px-3 py1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
