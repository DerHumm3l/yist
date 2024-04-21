import { useParams } from "react-router-dom";
import { useList, useListItems, useListItemsActions } from "@/lib/state/hooks";
import LinkButton from "@/components/LinkButton";
import { Checkbox } from "@/components/ui/checkbox";

export default function ListPage() {
  const { id } = useParams();
  const list = useList({ id });
  const listItems = useListItems({ listId: list?.id });
  const { updateListItem } = useListItemsActions();

  if (!list) {
    return <div>ERROR</div>;
  }

  return (
    <main className="">
      <h1>List page: {list.name}</h1>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            <Checkbox
              checked={item.checked}
              onCheckedChange={(checked) =>
                updateListItem({ ...item, checked: checked === true })
              }
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <LinkButton to="/">Back</LinkButton>
      <LinkButton to="editItems">Edit Items</LinkButton>
      <LinkButton to="addItems">Add items</LinkButton>
    </main>
  );
}
