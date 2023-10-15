import BillGroupCreatePage from "../pages/BillGroup/BillGroupCreatePage";
import BillGroupIndexPage from "../pages/BillGroup/BillGroupIndexPage";
import ShowBillGroupPage from "../pages/BillGroup/ShowBillGroupPage";
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
    {
      path: ":billGroupId",
      element: <ShowBillGroupPage />,
    },
  ],
};

export default billGroupRoute;
