import ListCard from "./listCard";
import { List } from "@/types/list";

type ListsViewProps = {
  lists: List[];
};

export default function ListsView({ lists }: ListsViewProps) {
  return (
    <section className="w-full">
      <ul className="flex flex-col items-center divide-y">
        {lists.map((list) => (
          <li key={list.name} className="p-2 w-full">
            <ListCard list={list} />
          </li>
        ))}
      </ul>
    </section>
  );
}
