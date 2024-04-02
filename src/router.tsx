import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import AddListItemsPage from "./pages/AddListItemsPage";
import EditListItemsPage from "./pages/EditListItemsPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "list/new",
    action: () => {
      return redirect(`list/${1}/addItems`);
    },
  },
  {
    path: "list/:listId",
    element: <ListPage />,
  },
  {
    path: "list/:listId/addItems",
    element: <AddListItemsPage />,
  },
  {
    path: "list/:listId/editItems",
    element: <EditListItemsPage />,
  },
]);
