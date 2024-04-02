import { useParams } from "react-router-dom";
import lists from "@/data/lists.json";

export default function ListPage() {
  const { id } = useParams();
  const list = lists.find((x) => x.id === id);

  if (!list) {
    return <div>ERROR</div>;
  }

  return (
    <main className="">
      <h1>List page: {list.name}</h1>
      <ul>
        {list.items.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
