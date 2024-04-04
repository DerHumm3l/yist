import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import AddListItemsPage from "./pages/AddListItemsPage";
import EditListItemsPage from "./pages/EditListItemsPage";
import { id } from "./lib/id";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "list/new",
    loader: async () => {
      return redirect(`/list/${id()}/addItems`);
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
