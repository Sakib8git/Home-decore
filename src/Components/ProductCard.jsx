import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  
  const {id, name, category, price,  image, description } = product;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out ">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between items-center">
            <p className="flex-6 font-bold">{category}</p>
            <p className="flex-1 font-semibold">${price}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/productdetails/${id}`}className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// "id": 1,
//     "name": "Modern Velvet Sofa",
//     "category": "Furniture",
//     "price": 520,
//     "material": "Velvet, Wood",
//     "dimensions": "84 x 35 x 33 in",
//     "stock": true,
//     "image": "https://i.ibb.co.com/tM7pbxwx/Modern-Velvet-Sofa.jpg",
//     "description":
