import { createBrowserRouter } from "react-router";

import Product from "../Pages/Product";

import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

import Roots from "../Layout/Root";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    // hydrateFallbackElement: <p>Loading.........</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: "/productdetails/:id",
        Component: ProductDetails,
      },
    ],
  },
]);

export default router;
