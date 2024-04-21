import LinkButton from "@/components/LinkButton";
import ListsView from "@/components/ListsView";
import { useLists } from "@/lib/state/hooks";

export default function HomePage() {
  const lists = useLists();

  return (
    <main className="flex flex-col items-center">
      <h1>yist</h1>
      <LinkButton to="settings">Settings</LinkButton>
      <LinkButton to="list/new">Add list</LinkButton>
      <ListsView lists={lists} />
    </main>
  );
}
