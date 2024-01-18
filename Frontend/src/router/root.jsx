import {
    createBrowserRouter,

  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Add from "../pages/add/Add";
import Basket from "../pages/Basket/Basket";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/add",
      element:<Add/>,
    },
    {
      path: "/b",
      element:<Basket/>,
    },
  ]);