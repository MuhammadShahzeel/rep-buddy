import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
