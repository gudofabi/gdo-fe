import BillsIndexPage from "../pages/Bills/BillsIndexPage";
import ShowBillPage from "../pages/Bills/ShowBillPage";
import BillsPage from "../pages/BillsPage";

const billsRoute = {
  path: "bills",
  element: <BillsPage />,
  children: [
    {
      index: true,
      element: <BillsIndexPage />,
    },
    {
      path: ":billsId",
      element: <ShowBillPage />,
    },
  ],
};

export default billsRoute;
