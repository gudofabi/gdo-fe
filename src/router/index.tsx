import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BillsPage from "../pages/BillsPage";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import BillGroupPage from "../pages/BillGroupPage";
import OwnedListPage from "../pages/OwnedListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "bills", element: <BillsPage /> },
      { path: "bill-group", element: <BillGroupPage /> },
      { path: "owned", element: <OwnedListPage /> },
    ],
  },
]);

export default router;
