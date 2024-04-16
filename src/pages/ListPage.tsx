import { useParams } from "react-router-dom";
import { listItemsSelector, listSelector, useListsStore } from "@/lib/store";
import LinkButton from "@/components/LinkButton";
import { Checkbox } from "@/components/ui/checkbox";

export default function ListPage() {
  const { id } = useParams();
  const { list } = useListsStore(listSelector(id));
  const { listItems, updateListItem } = useListsStore(
    listItemsSelector(list?.id)
  );

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
