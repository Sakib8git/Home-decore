import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
 import { ToastContainer, toast } from 'react-toastify';
const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const { products, loading, error } = useProducts();

  const detailsOfProduct = products.find((p) => p.id === productId);

  if (loading) return <p>Loding.....</p>;
  const { name, category, price, image, description, dimensions, material } =
    detailsOfProduct;

  const handleWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatList = [];
    if (existingList) {
      const isDuplicate = existingList.some(
        (p) => p.id === detailsOfProduct.id
      );
      if (isDuplicate) return toast("same");
      updatList = [...existingList, detailsOfProduct];
    } else {
      updatList.push(detailsOfProduct);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatList));
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className="w-[500px] rounded-2xl hover:scale-110 transition ease-in-out"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{name}</h2>
          <p>{description}</p>
          <div className="flex">
            <p className="flex-20">{category}</p>
            <p>${price}</p>
          </div>
          <div className="flex">
            <p className="flex-20">{material}</p>
            <p>${dimensions}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleWishlist} className="btn btn-primary">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;

