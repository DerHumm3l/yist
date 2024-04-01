import lists from "@/data/lists.json";
import ListCard from "./ListCard";

export default function ListsView() {
  return (
    <section>
      <ul>
        {lists.map((list) => (
          <li key={list.name}>
            <ListCard list={list} />
          </li>
        ))}
      </ul>
    </section>
  );
}
