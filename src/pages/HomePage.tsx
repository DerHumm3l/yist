import ListsView from "@/components/ListsView";
import AddListButton from "@/components/addListButton";
import * as Header from "@/components/header";
import SettingsButton from "@/components/settingsButton";
import { useLists } from "@/lib/state/hooks";

export default function HomePage() {
  const lists = useLists();

  return (
    <main className="flex flex-col items-center">
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
