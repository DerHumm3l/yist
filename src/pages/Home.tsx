import ListsView from "@/components/ListsView";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1>yist</h1>
      <Button onClick={() => console.log("list created")}>Create list</Button>
      <ListsView />
    </main>
  );
}
