import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import AddListItemsPage from "./pages/addListItemsPage";
import EditListItemsPage from "./pages/editListItemsPage";
import { id } from "./lib/id";
import SettingsPage from "./pages/settingsPage";

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
  {
    path: "settings",
    element: <SettingsPage />,
  },
]);
