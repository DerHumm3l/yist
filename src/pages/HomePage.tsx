import LinkButton from "@/components/LinkButton";
import ListsView from "@/components/ListsView";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <h1>yist</h1>
      <LinkButton to="list/new">Lists</LinkButton>
      <ListsView />
    </main>
  );
}
