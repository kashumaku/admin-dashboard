import React from "react";

const NewProduct = () => {
  return (
    <div className="p-5">
      {/* header */}
      <section className="flex justify-between mb-5">
        <h1>New Product</h1>
        <div>
          <button>Save</button>
          <button>Clear</button>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-5">
        {/* left */}
        <div className="col-span-2 flex flex-col gap-5 ">
          {/* basic info */}
          <div className="border border-gray-400">
            <h1>Basic information</h1>
            <p>
              <span>Name</span>
              <input placeholder="Product name" />
            </p>
            <p>
              <span>Description</span>
              <textarea placeholder="Product description"></textarea>
            </p>
          </div>
          {/* quantity */}
          <div className="border border-gray-400">
            <p>
              <h1>Stock quantity</h1>
              <input type="number" placeholder="quantity" />
            </p>
            <p>
              <h1>Price </h1>
              <input type="number" placeholder="price" />
            </p>
          </div>
          {/* image */}
          <div className="border border-gray-400">
            <p>
              <h1>Product image</h1>
              <input type="file" />
              <input type="file" />
              <input type="file" />
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-5">
          {/* visiblity */}
          <div className="border border-gray-400 p-5">
            <h1>Visiblity</h1>
            <p>
              <input type="radio" />
              <span>Publish</span>
            </p>
            <p>
              <input type="radio" />
              <span>Hidden</span>
            </p>
            <p>
              <input type="radio" />
              <span>Schedule</span>
            </p>
          </div>
          {/* categories */}
          <div className="border border-gray-400 flex flex-col gap-2 p-5">
            <h1>Categories</h1>
            <span>Furniture</span>
            <span>Elec</span>
            <span>Men</span>
          </div>
        </div>
      </section>
      {/* main  */}
    </div>
  );
};

export default NewProduct;
