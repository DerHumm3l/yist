import ListsView from "@/components/ListsView";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1>yist</h1>
      <Button onClick={() => console.log("list created")}>Create list</Button>
      <Link to="list/3">Lists</Link>
      <ListsView />
    </main>
  );
}
