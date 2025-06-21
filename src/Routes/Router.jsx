import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import HomePage from "../pages/HomePage";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../layouts/AuthLayout";
import Newsdetails from "../pages/Newsdetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <Newsdetails></Newsdetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
