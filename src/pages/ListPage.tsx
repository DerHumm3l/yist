import { useParams } from "react-router-dom";
import { listItemsSelector, listSelector, useListsStore } from "@/lib/store";

export default function ListPage() {
  const { id } = useParams();
  const list = useListsStore(listSelector(id));
  const listItems = useListsStore(listItemsSelector(list?.id));

  if (!list) {
    return <div>ERROR</div>;
  }

  return (
    <main className="">
      <h1>List page: {list.name}</h1>
      <ul>
        {listItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
