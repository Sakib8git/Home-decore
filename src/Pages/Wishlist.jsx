import React, { useEffect, useState } from "react";
import { data } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Wishlist = () => {
  const [wishlist, setwishList] = useState([]);
  const [sorted, setSorted] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("wishlist"));
    if (saveList) setwishList(saveList);
  }, []);

  if(!wishlist.length) return <p>No Data</p>
  // !note:-------------------------sorting--------
  const sortedProducts = (() => {
    if (sorted === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sorted === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();
  // !note:-------------------------sorting--------

  // !note:-------------------------remove--------

  const handlremove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatList = existingList.filter((p) => p.id !== id);

    setwishList(updatList);
    localStorage.setItem("wishlist", JSON.stringify(updatList));
  };

  // !note:-------------------------remove--------

  // !fixme:---recharts-similar remove  --------
  const totalCategory = {};
  wishlist.forEach((product) => {
    const category = product.category;

    totalCategory[category] = totalCategory[category] || +product.price;
  });

  const chartData = Object.keys(totalCategory).map((category) => ({
    category ,
    total: totalCategory[category],
  }));

  // !fixme:---recharts-similar remove --------
  return (
    <div>
      {/* ---21-- */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">
          Wishlist{" "}
          <span className="text-xl"> total product:{wishlist.length}</span>{" "}
        </h1>
        {/* ------------------ */}

        <select
          className="select select-bordered"
          value={sorted}
          onChange={(e) => setSorted(e.target.value)}
        >
          <option value="none">Sort by Price</option>
          <option value="price-asc">Low - High</option>
          <option value="price-desc">High - Low</option>
        </select>

        {/* -------------------------- */}
      </div>
      {/* ---2-- */}
      <div className="">
        {sortedProducts.map((p) => (
          <div className="card card-side bg-base-100 shadow-sm mb-3">
            <figure>
              <img className="w-[160px]" src={p.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p>{p.description}</p>
              <p className="font-bold">{p.price} $</p>
              <div className="card-actions justify-end">
                <button onClick={() => handlremove(p.id)} className="btn ">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ---3 chart-- */}

      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Wishlist Summary</h3>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="total" fill="purple" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
