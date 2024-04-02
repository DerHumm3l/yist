import LinkButton from "@/components/LinkButton";
import ListsView from "@/components/ListsView";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <h1>yist</h1>
      <LinkButton to="list/3">Lists</LinkButton>
      <ListsView />
    </main>
  );
}
