import BillGroupCreatePage from "../pages/BillGroup/BillGroupCreatePage";
import BillGroupIndexPage from "../pages/BillGroup/BillGroupIndexPage";
import BillGroupPage from "../pages/BillGroupPage";

const billGroupRoute = {
  path: "bill-group",
  element: <BillGroupPage />,
  children: [
    {
      index: true,
      element: <BillGroupIndexPage />,
    },
    {
      path: "create",
      element: <BillGroupCreatePage />,
    },
  ],
};

export default billGroupRoute;
