import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";

import billGroupRoute from "./billGroupRoute";
import ownedRoute from "./ownedRoute";
import billsRoute from "./billsRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { ...billsRoute },
      { ...billGroupRoute },
      { ...ownedRoute },
    ],
  },
]);

export default router;
