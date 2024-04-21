import { useListItems } from "@/lib/state/hooks";
import { useParams } from "react-router-dom";

export default function EditListItemsPage() {
  const { id: listId } = useParams();
  const listItems = useListItems({ listId });

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
