import LinkButton from "@/components/LinkButton";
import * as Header from "@/components/header";
import { ChevronLeft } from "lucide-react";
import SettingsList from "@/components/settingsList";

export default function SettingsPage() {
  return (
    <main className="flex flex-col items-center m-auto max-w-screen-md h-screen p-4 space-y-8">
      <Header.Root>
        <Header.Left>
          <LinkButton to="/" size={"icon"} variant={"outline"}>
            <ChevronLeft />
          </LinkButton>
        </Header.Left>
        <Header.Center>Settings</Header.Center>
      </Header.Root>
      <SettingsList />
    </main>
  );
}
