import LinkButton from "@/components/LinkButton";
import ListsView from "@/components/ListsView";
import { useListsStore } from "@/lib/store";

export default function HomePage() {
  const lists = useListsStore((state) => state.lists);

  return (
    <main className="flex flex-col items-center">
      <h1>yist</h1>
      <LinkButton to="list/new">Add list</LinkButton>
      <ListsView lists={lists} />
    </main>
  );
}
