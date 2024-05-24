import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OrderForm from "../Pages/OrderForm";
import Login from "../Pages/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/menu",
            element:<Menu></Menu>,
        },
        {
            path:"/order",
            element:<OrderForm></OrderForm>,
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
      ]
    },
  ]);
