import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import React from "react";
import LoginPage from "../components/User/LoginPage.jsx";
import RegistrationPage from "../components/User/RegistrationPage.jsx";
import HomePage from "../components/Home/HomePage.jsx";
import RecipePage from "../components/Recipes/RecipePage.jsx";
import SearchPage from "../components/Search/SearchPage.jsx";
import Logout from "../components/User/Logout.jsx";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/recipes",
          element: <RecipePage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
