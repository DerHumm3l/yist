import ListCard from "./ListCard";
import { List } from "@/types/list";

type ListsViewProps = {
  lists: List[];
};

export default function ListsView({ lists }: ListsViewProps) {
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
