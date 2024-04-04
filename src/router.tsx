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
    loader: async () => {
      return redirect(`/list/${1}/addItems`);
    },
  },
  {
    path: "list/:id",
    element: <ListPage />,
  },
  {
    path: "list/:id/addItems",
    element: <AddListItemsPage />,
  },
  {
    path: "list/:id/editItems",
    element: <EditListItemsPage />,
  },
]);
