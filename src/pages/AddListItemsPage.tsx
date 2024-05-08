import { Button } from "@/components/ui/button";
import { createList, createListItem } from "@/lib/utils";
import { ListItem } from "@/types/listItem";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDefault } from "@uidotdev/usehooks";
import AddListItemsInput from "@/components/AddListItemsInput";
import {
  useListItemsActions,
  useList,
  useListsActions,
} from "@/lib/state/hooks";

export default function AddListItemsPage() {
  const { id } = useParams();

  if (!id) {
    throw new Error("Not possible");
  }

  const navigate = useNavigate();

  const listInStore = useList({ id });
  const { addList, updateList } = useListsActions();
  const { addListItems } = useListItemsActions();

  const [list] = useDefault(listInStore, createList(id));
  const [listItems, setListItems] = React.useState([] as ListItem[]);

  const cancel = () => {
    navigate(-1);
  };

  const submit = () => {
    if (!listInStore) {
      addList(list!);
    } else {
      updateList(list!);
    }

    addListItems(...listItems);
    navigate(`/list/${list!.id}`, { replace: true });
  };

  const listItemAdded = (name: string) => {
    const listItem = createListItem(list!, name);
    setListItems([...listItems, listItem]);
  };

  return (
    <main className="">
      <h1>Add list items page</h1>
      <AddListItemsInput onListItemAdded={listItemAdded} />
      <ul>
        {listItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
      <Button onClick={cancel}>Cancel</Button>
      <Button type="submit" onClick={submit}>
        Submit
      </Button>
    </main>
  );
}
