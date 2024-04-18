import { listItemsSelector, useListsStore } from "@/lib/store";
import { useParams } from "react-router-dom";

export default function EditListItemsPage() {
  const { id: listId } = useParams();
  const { listItems } = useListsStore(listItemsSelector(listId));

  return (
    <main className="">
      <h1>Edit list items page</h1>
      <ul>
        {listItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
    </main>
  );
}
