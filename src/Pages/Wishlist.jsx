import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setwishList] = useState([]);
  const [sorted, setSorted] = useState("none");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("wishlist"));
    if (saveList) setwishList(saveList);
  }, []);

  // !note:-------------------------sorting--------
  const sortedProducts = () => {
    if (sorted === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sorted === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  };

  return (
    <div>
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
      <div className="">
        {sortedProducts().map((p) => (
          <div className="card card-side bg-base-100 shadow-sm mb-3">
            <figure>
              <img className="w-[160px]" src={p.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p>{p.description}</p>
              <p className="font-bold">{p.price} $</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
