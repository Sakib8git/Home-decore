import React from 'react';

const ProductCard = ({product}) => {
    console.log(product);
    const{name,category,price,material,image,description }= product
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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