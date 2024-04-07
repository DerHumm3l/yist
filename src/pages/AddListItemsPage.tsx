import { Button } from "@/components/ui/button";
import { listSelector, useListsStore } from "@/lib/store";
import { createList } from "@/lib/utils";
import { ListItem } from "@/types/listItem";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDefault } from "@uidotdev/usehooks";

export default function AddListItemsPage() {
  const { id } = useParams();

  if (!id) {
    throw new Error("Not possible");
  }

  const navigate = useNavigate();

  const {
    list: listInStore,
    addList,
    addListItems,
    updateList,
  } = useListsStore(listSelector(id));

  const [list, setList] = useDefault(listInStore, createList(id));
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
    navigate(`/list/${list!.id}`);
  };

  return (
    <main className="">
      <h1>Add list items page</h1>
      <Button onClick={cancel}>Cancel</Button>
      <Button onClick={submit}>Submit</Button>
    </main>
  );
}
