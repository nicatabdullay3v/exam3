import {
    createBrowserRouter,

  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Add from "../pages/add/add";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/add",
      element:<Add/>,
    },

  ]);