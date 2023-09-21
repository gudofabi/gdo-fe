import OwnedCreatePage from "../pages/Owned/OwnedCreatePage";
import OwnedIndexPage from "../pages/Owned/OwnedIndexPage";
import OwnedListPage from "../pages/OwnedListPage";

const ownedRoute = {
  path: "owned",
  element: <OwnedListPage />,
  children: [
    {
      index: true,
      element: <OwnedIndexPage />,
    },
    {
      path: "create",
      element: <OwnedCreatePage />,
    },
  ],
};

export default ownedRoute;
