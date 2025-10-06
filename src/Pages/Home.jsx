import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import Product from "./Product";

import useProducts from "../Hooks/useProducts";

const Home = () => {
  // const promiseProducts = useLoaderData();

  const { products, loading, error } = useProducts();
  
  const fetureProducts = products.slice(0, 6);
  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <h1>Fetured Products</h1>
        <Link className="btn mt-5" to="/product">
          See All Products
        </Link>
      </div>
      {/* home--------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fetureProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
