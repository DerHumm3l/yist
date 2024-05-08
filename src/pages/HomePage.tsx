import ListsView from "@/components/ListsView";
import AddListButton from "@/components/addListButton";
import * as Header from "@/components/header";
import SettingsButton from "@/components/settingsButton";
import { useLists } from "@/lib/state/hooks";
import { useNavigate } from "react-router-dom";
import { App } from "@capacitor/app";
import React from "react";

export default function HomePage() {
  const lists = useLists();
  const navigate = useNavigate();

  React.useEffect(() => {
    App.addListener("backButton", (e) => {
      e.canGoBack = false;

      const pathname = window.location.pathname;

      if (pathname === "/") {
        App.exitApp();
      } else {
        navigate(-1);
      }
    });
  }, []);

  return (
    <main className="flex flex-col items-center m-auto max-w-screen-md p-4">
      <Header.Root>
        <Header.Right>
          <SettingsButton className="justify-end" />
        </Header.Right>
      </Header.Root>
      <AddListButton className="my-8" />
      <ListsView lists={lists} />
    </main>
  );
}
