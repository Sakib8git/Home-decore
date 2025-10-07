export const lodeWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// export const updateList = (product)=> {
//     const wistList = lodeWishlist()

//     try{
// const isDuplicate = wistList.s
//     }catch{

//     }
// }


// v-9 18 min