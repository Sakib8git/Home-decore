import { createBrowserRouter } from "react-router";

import Product from "../Pages/Product";

import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

import Roots from "../Layout/Root";
import Home from "../Pages/Home";

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
        loader: () => fetch("./furnitureData.json"),
      },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
    ],
  },
]);

export default router;
