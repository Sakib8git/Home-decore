import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Product = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState('');
  const term = search.trim().toLowerCase();
  const searchedProducts = term ? products.filter(product=>product.name.toLowerCase().includes(term) ) : products;
  console.log(search);
  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          All Products{" "}
          <span className="text-lg font-light">
            ({searchedProducts.length}) Products Found
          </span>{" "}
        </h1>
        {/* ____search */}
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>
      {/* home--------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
