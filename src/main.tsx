import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { App } from "@capacitor/app";

async function addBackButtonListener() {
  return App.addListener("backButton", (e) => {
    e.canGoBack = false;

    const pathname = window.location.pathname;

    if (pathname === "/") {
      App.exitApp();
    } else {
      window.history.back();
    }
  });
}

function Yist() {
  React.useEffect(() => {
    addBackButtonListener();

    return () => {
      App.removeAllListeners();
    };
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Yist />);
