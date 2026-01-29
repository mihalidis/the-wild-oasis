import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import AppLayout from "../ui/AppLayout.jsx";
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings.jsx";
import Cabins from "../pages/Cabins.jsx";
import Users from "../pages/Users.jsx";
import Settings from "../pages/Settings.jsx";
import Account from "../pages/Account.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Login from "../pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/cabins",
        element: <Cabins />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
])

export default router;


