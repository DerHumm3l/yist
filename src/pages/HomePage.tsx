import ListsView from "@/components/listsView";
import AddListButton from "@/components/addListButton";
import * as Header from "@/components/header";
import SettingsButton from "@/components/settingsButton";
import { useLists } from "@/lib/state/hooks";

export default function HomePage() {
  const lists = useLists();

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
